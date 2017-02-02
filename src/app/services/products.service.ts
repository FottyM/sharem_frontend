import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import {Product} from "../models/product";
import {backendUrl} from "../backend/backend";
import {currentUser} from "../helpers/global-variables";


@Injectable()
export class ProductsService {

  private  url = `${backendUrl}/users/${this.currentUserId()}/products`;

  constructor(private http: Http) { }

  //search
  getOneProduct(id: number){
    return this.http.get(`${this.url}/${id}`, this.jwt())
      .map( (response: Response) => { response.json() as Product});
  }

  //create
  createProduct(product: Product): Observable<Product>{
    debugger;
    return this.http.post(this.url, product, this.jwt()).map( (response: Response) => response.json() as Product)
  }
  //read

  getPorducts(): Observable<Product[]>{
    return this.http.get(this.url, this.jwt()).map((response: Response) => response.json() as Product[])
  }
  //update
  updateProduct(product: Product): Observable<Product>{
    return this.http.put(this.url,product,this.jwt()).map( (response: Response) => response.json() as Product )
  }
  //detele
  deleteProduct(id :number){
    return this.http.delete(`${this.url}/${id}`, this.jwt()).map((response: Response) => response.json());
  }

  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      // let headers = new Headers({'Content-Type': 'application/json'});
      return new RequestOptions({ headers: headers });
    }
  }

  private currentUserId(): number {
    if(currentUser){
      return currentUser.user.user_id;
    }
  }
}
