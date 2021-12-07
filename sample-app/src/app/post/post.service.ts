import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAccessPageToken() {
    // return this.http.get(this.baseUrl + 'login', model).pipe(
    //   map((response: any) => {
    //     const user = response;
    //     if (user) {
    //       localStorage.setItem('token', user.token);
    //       localStorage.setItem('user', JSON.stringify(user.user));
    //       this.decodedToken = this.jwtHelper.decodeToken(user.token);
    //       this.currentUser = user.user;
    //       this.changeMemberPhoto(this.currentUser.photoUrl);
    //     }
    //   })
    // );
  }
}
