import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'smartAssist-child2-demo',
  imports: [],
  templateUrl: './child2-demo.html',
  styleUrl: './child2-demo.css',
  outputs: ['nameEvent']
})
export class Child2Demo {
  @Input() achild2: any;

  b: number = 200;
  name: string = 'Angular Flexi training';

  nameEvent = new EventEmitter();
  sendDataToParent() {
    this.nameEvent.emit(this.name);
  }
}
