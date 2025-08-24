import { Users } from './../users/users';
import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ParentDemo } from '../parent-demo/parent-demo';

@Component({
  selector: 'smartAssist-body',
  imports: [
    // Databinding
    // DirectivesDemo
    // Users
    // PipesDemo
    ParentDemo
  ],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
