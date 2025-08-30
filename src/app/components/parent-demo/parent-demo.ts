import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'smartAssist-parent-demo',
  imports: [
    FormsModule,
    Child1Demo,
    Child2Demo
  ],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css'
})
export class ParentDemo {
  a: number;
  parentName: string | undefined;

  @ViewChild('inputBox') myInputBox: any;

  receiveDataFromChild(dataFromChild: string) {
    this.parentName = dataFromChild;
  }

  clickHanlder() {
    console.log('Hiiiiiiiiii')
  }

  constructor() {
    this.a = 100; // 1. Initialize class members
    console.log("Parent constructor");
    console.log(this.myInputBox);
  }
  // ngOnChanges() { // this hook wont be invoked if the comp doesnt have inputs:[]
  //   console.log('Parent ngOnChanges');
  // }
  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.myInputBox);
    this.myInputBox.nativeElement.focus();
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}
