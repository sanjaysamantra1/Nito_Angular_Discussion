import { Component } from '@angular/core';

@Component({
  selector: 'smartAssist-home',
  imports: [],
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
