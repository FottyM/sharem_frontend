import { Component, OnInit } from '@angular/core';
import { Product } from "../models/product";
import { PRODUCTS } from "../backend/backend";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  products: Product[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.products = PRODUCTS;
  }

  gotoDetails(product: Product){
    let link = ['/products', product.id];
    this.router.navigate(link);
  }

}
