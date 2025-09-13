import { CommentDemo } from '../comment-demo/comment-demo';
import { EmployeeList } from '../employee-list/employee-list';
import { HttpDemo1 } from '../http-demo1/http-demo1';
import { AngularMaterialDemo } from './../angular-material-demo/angular-material-demo';
import { Component } from '@angular/core';

@Component({
  selector: 'smartAssist-home',
  imports: [
    // AngularMaterialDemo,
    // HttpDemo1
    // CommentDemo
    EmployeeList
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
