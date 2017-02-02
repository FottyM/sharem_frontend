import { Component, OnInit } from '@angular/core';
import { AlertService } from "../../services/alert.service";
import { ProductsService } from "../../services/products.service";
import { Product } from "../../models/product";
import { Subscription } from 'rxjs/Subscription';
import {products} from "../../backend/backend";
import {currentUser} from "../../helpers/global-variables";


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  products;
  currentUser = currentUser.user;

  constructor(private alertService: AlertService, private productService: ProductsService) { }

  ngOnInit() {
    // this.getAllProducts();
    console.log(this.currentUser);
    this.products = products;
  }

  getAllProducts(){
    return this.productService.getPorducts()
      .subscribe(
        data=>{
          this.products = data;
          this.alertService.success('Here you are!')
        },
        error => {
          this.alertService.error( this.toString(error._body));
          console.log(error);
        });
  }

  toString(error:any){
    return JSON.parse(error).message;
  }

}
