import { AngularMaterialDemo } from './../angular-material-demo/angular-material-demo';
import { Component } from '@angular/core';

@Component({
  selector: 'smartAssist-home',
  imports: [
    AngularMaterialDemo
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
