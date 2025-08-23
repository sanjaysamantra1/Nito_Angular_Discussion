import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'smartAssist-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  myName: string = 'Virat Kohli';
  img_url: string = 'https://shorturl.at/Sbg9j';
  num1:number = 10;
  num2:number = 20;

  flag: boolean = false;

  addToCart() {
    alert('Item is Added to Cart!!!')
  }

  addResult:any;
  addition(a: any,b: any){
    this.addResult = +a + +b;
  }
}
