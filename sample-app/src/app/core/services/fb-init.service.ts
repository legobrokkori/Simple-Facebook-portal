import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginOptions, LoginResponse } from 'ngx-facebook';
import { IRootObject } from 'src/app/models/root';
import { Account } from 'src/app/models/account';
import { environment } from 'src/environments/environment';
import { IFeed } from 'src/app/models/feed';
import { IComments } from 'src/app/models/post';
import { ICommentsAndLikes } from 'src/app/models/like';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FbInitService {
  options: LoginOptions = {
    scope: 'public_profile,user_friends,email,pages_show_list,pages_messaging,pages_read_engagement,pages_read_user_content,pages_manage_posts,pages_manage_engagement',
    return_scopes: true,
    enable_profile_selector: true
  };
  baseUrl = environment.apiUrl;

  constructor(private fb: FacebookService, private http: HttpClient, private router: Router) {
    const initParams: InitParams = {
      appId: environment.facebookAppId,
      cookie: true,
      xfbml: true,
      version: 'v12.0'
    };
    fb.init(initParams);
  }

  login() {
    this.fb.login(this.options)
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
        localStorage.setItem('loginId', res.authResponse.userID);
        return this.fb.api(res.authResponse.userID + '/accounts', 'get', {
          access_token : res.authResponse.accessToken
        });
      })
      .then((res: IRootObject<Account>) => {
        console.log(res);
        localStorage.setItem('pageId', res.data[0].id);
        localStorage.setItem('pageAccessToken', res.data[0].access_token);
      })
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(this.handleError);

  }

  getPosts() {
    const pageId = localStorage.getItem('pageId');
    const pageAccessToken = localStorage.getItem('pageAccessToken');
    return this.http.get<IRootObject<IFeed>>(this.baseUrl + pageId + '/feed?access_token=' + pageAccessToken);
  }

  showMore(url: string) {
    return this.http.get<IRootObject<IFeed>>(url);
  }

  getPost(id: string) {
    const pageAccessToken = localStorage.getItem('pageAccessToken');
    return this.http.get<IComments>(this.baseUrl + id + '?access_token=' + pageAccessToken);
  }

  getComments(id: string) {
    const pageAccessToken = localStorage.getItem('pageAccessToken');
    return this.http.get<IRootObject<ICommentsAndLikes>>(this.baseUrl + id + '/comments?fields=likes.summary(true),created_time,from,message,id&access_token=' + pageAccessToken);
  }

  getReplies(id: string) {
    const pageAccessToken = localStorage.getItem('pageAccessToken');
    return this.http.get<IRootObject<IComments>>(this.baseUrl + id + '/comments?access_token=' + pageAccessToken);
  }

  postReply(id: string, reply: string) {
    const pageAccessToken = localStorage.getItem('pageAccessToken');
    return this.http.post(this.baseUrl + id + '/comments', {
      message: reply,
      access_token: pageAccessToken
    } );
  }

  postComment(id: string, comment: string) {
    const pageAccessToken = localStorage.getItem('pageAccessToken');
    return this.http.post(this.baseUrl + id + '/comments', {
      message: comment,
      access_token: pageAccessToken
    } );
  }

  postLike(id: string) {
    const pageAccessToken = localStorage.getItem('pageAccessToken');
    return this.http.post(this.baseUrl + id + '/likes', {
      access_token: pageAccessToken
    } );
  }

  deleteLike(id: string) {
    const pageAccessToken = localStorage.getItem('pageAccessToken');
    return this.http.delete(this.baseUrl + id + '/likes?access_token=' + pageAccessToken);
  }

  private handleError(error) {
    console.error('Error processing action', error);
  }
}
