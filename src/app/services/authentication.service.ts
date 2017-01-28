import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {backendUrl} from "../backend/backend";

@Injectable()
export class AuthenticationService {

  private  loginUrl: string =  `${backendUrl}/authenticate`;

  constructor(private http: Http) { }

  login(email: string, password: string): Observable<any> {

    return this.http.post(this.loginUrl, {email: email, password: password})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        console.log('this is the user object' + user.token );
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
