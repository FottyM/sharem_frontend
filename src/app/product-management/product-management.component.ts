import { Component, OnInit } from '@angular/core';
import {AlertService} from "../services/alert.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../models/product";
import {ProductsService} from "../services/products.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from 'rxjs/Subscription'

@Component({
  selector: 'product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.sass']
})
export class ProductManagementComponent implements OnInit {

  product: FormGroup;

  constructor(private alertService: AlertService,
              private productService: ProductsService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('Product management...');
    this.product = this.initProductFormBuilder();
  }

  addProduct({ value, valid }: { value: Product, valid: boolean }){

    return this.productService.createProduct(value).subscribe(
      (data) => {

        this.alertService.success(`${data.name} has been successfully added`);
        //this.route.snapshot()
        // take to product details

      },
      (error) => {

        this.alertService.error(error._body);
      }
    );
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id)
      .subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {console.log(error)
      }
    );

  }

  upadteProduct(product: Product){
    return this.productService
      .updateProduct(product)
      .subscribe( data => {console.log(data)}, error => { console.log(error)});
  }

  private initProductFormBuilder() {
    return this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      images:{}
    });
  }
}
