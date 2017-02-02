import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {User} from "../models/user";
//The return type
import { Observable } from 'rxjs/Observable';
import {backendUrl} from "../backend/backend";




@Injectable()
export class UserService {

  private  url: string = `${backendUrl}/users`;

  constructor(private http: Http) {

  }

  getAll(){
    return this.http.get(this.url, this.jwt()).map((response: Response) => response.json());
  }

  getOne(id: number){
    return this.http.get(`${this.url}/${id}`, this.jwt()).map((response: Response) => response.json());
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
  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }

}
