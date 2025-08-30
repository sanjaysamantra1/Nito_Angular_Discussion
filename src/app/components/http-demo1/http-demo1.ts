import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'smartAssist-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css'
})
export class HttpDemo1 {
  user_api_url = 'https://jsonplaceholder.typicode.com/users';
  userArr: any[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.fetchUsers_javascript();
    this.fetchUsers_angular();
  }
  fetchUsers_javascript() {
    fetch(this.user_api_url).then(
      (response) => {
        response.json().then(finalResponse => {
          console.log(finalResponse);
        })
      },
      (error) => {
        console.log(error)
      }
    )
  }
  fetchUsers_angular() {
    this.httpClient.get(this.user_api_url).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('all data received');
      }
    })
  }
}
