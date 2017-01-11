import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {User} from "../models/user";
//
import { Observable } from 'rxjs/Observable';



@Injectable()
export class UserService {

  private  url: string = 'http://test.sharem.eu/api/users';

  constructor(private http: Http) {
  //  constructor
  }

  getAll() {
    return this.http.get(this.url, this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get(this.url + id, this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post(this.url, user, this.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put(this.url+ user.id, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete(this.url + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods
// okay I get it
  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }

}
