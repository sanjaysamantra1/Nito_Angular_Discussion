import { MathService } from './../../services/math-service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'smartAssist-math-demo2',
  imports: [],
  templateUrl: './math-demo2.html',
  styleUrl: './math-demo2.css'
})
export class MathDemo2 {
   mathService = inject(MathService); // Dependency Injection

   ngOnInit() {
    console.log('Math-2 Component')
    console.log(this.mathService.mul(10,20));
  }
}
