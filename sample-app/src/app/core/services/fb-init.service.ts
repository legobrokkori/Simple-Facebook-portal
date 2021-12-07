import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginOptions, LoginResponse } from 'ngx-facebook';
import { IRootObject } from 'src/app/models/root';
import { Account } from 'src/app/models/account';
import { environment } from 'src/environments/environment';
import { IFeed } from 'src/app/models/feed';

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

  constructor(private fb: FacebookService, private http: HttpClient) {
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
        return this.fb.api(res.authResponse.userID + '/accounts', 'get', {
          access_token : res.authResponse.accessToken
        });
        // return this.http.get(this.baseUrl + res.authResponse.userID + '/accounts?access_token=' + res.authResponse.accessToken)
        // .toPromise();
      })
      .then((res: IRootObject<Account>) => {
        console.log(res);
        localStorage.setItem('pageId', res.data[0].id);
        localStorage.setItem('pageAccessToken', res.data[0].access_token);
      })
      .catch(this.handleError);

  }

  getPosts() {
    const pageId = localStorage.getItem('pageId');
    const pageAccessToken = localStorage.getItem('pageAccessToken');
    return this.http.get<IRootObject<IFeed>>(this.baseUrl + pageId + '/feed?access_token=' + pageAccessToken);
  }

  private handleError(error) {
    console.error('Error processing action', error);
  }
}
