import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'smartAssist-child1-demo',
  imports: [],
  templateUrl: './child1-demo.html',
  styleUrl: './child1-demo.css',
  inputs: ['a', 'b']
})
export class Child1Demo {
  a: number | undefined;
  b: number | undefined;

  constructor() {
    console.log("Child constructor")
  }
  ngOnChanges(myChanges: SimpleChanges) {
    console.log('Child ngOnChanges', myChanges);
  }
  ngOnInit() {
    console.log('Child ngOnInit');
  }
}
