import { Component } from '@angular/core';
import { MathService } from '../../services/math-service';

@Component({
  selector: 'smartAssist-math-demo1',
  imports: [],
  templateUrl: './math-demo1.html',
  styleUrl: './math-demo1.css'
})
export class MathDemo1 {
  a: number = 10;
  b: number = 20;
  constructor(private mathService: MathService) {
  }
  ngOnInit() {
    console.log('Math-1 Component')
    console.log(`Addition of ${this.a} and ${this.b} is ${this.mathService.add(this.a, this.b)}`);
  }
}
