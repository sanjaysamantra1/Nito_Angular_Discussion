import { Users } from './../users/users';
import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { MathDemo1 } from '../math-demo1/math-demo1';
import { MathDemo2 } from '../math-demo2/math-demo2';
import { HttpDemo1 } from '../http-demo1/http-demo1';

@Component({
  selector: 'smartAssist-body',
  imports: [
    // Databinding
    // DirectivesDemo
    // Users
    // PipesDemo
    // ParentDemo
    // MathDemo1,
    // MathDemo2
    HttpDemo1
  ],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
