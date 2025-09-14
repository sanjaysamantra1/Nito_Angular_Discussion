import { ObservableDemo1 } from './../observable-demo1/observable-demo1';
import { CommentDemo } from '../comment-demo/comment-demo';
import { EmployeeList } from '../employee-list/employee-list';
import { HttpDemo1 } from '../http-demo1/http-demo1';
import { AngularMaterialDemo } from './../angular-material-demo/angular-material-demo';
import { Component } from '@angular/core';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { SubjectDemo1 } from '../subject-demo1/subject-demo1';

@Component({
  selector: 'smartAssist-home',
  imports: [
    // AngularMaterialDemo,
    // HttpDemo1
    // CommentDemo
    // EmployeeList
    // ObservableDemo1
    // ObservableDemo2
    SubjectDemo1
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  ngOnInit() {
    console.log('Home page is being Loaded...')
  }
  ngOnDestroy() {
    console.log('Home page is being destroyed...')
  }
}
