import { Component, OnInit } from '@angular/core';
import { Product } from "../models/product";
import { PRODUCTS } from "../backend/backend";

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass']
})
export class SearchResultsComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit() {
    this.products = PRODUCTS;
  }

}
