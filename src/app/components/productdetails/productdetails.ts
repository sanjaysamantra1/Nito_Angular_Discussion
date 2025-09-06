import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'smartAssist-productdetails',
  imports: [],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css'
})
export class Productdetails {
  product:any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.product = params;
    })
  }
}
