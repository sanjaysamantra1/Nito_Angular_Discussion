import { Component } from '@angular/core';
import productData from './product_data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'smartAssist-product-list',
  imports: [
    RouterLink,
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  productArr = productData;
}
