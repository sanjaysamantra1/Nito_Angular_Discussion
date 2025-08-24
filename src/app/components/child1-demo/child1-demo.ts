import { Component } from '@angular/core';

@Component({
  selector: 'smartAssist-child1-demo',
  imports: [],
  templateUrl: './child1-demo.html',
  styleUrl: './child1-demo.css',
  inputs:['a','b']
})
export class Child1Demo {
  a:number | undefined;
  b:number | undefined;
}
