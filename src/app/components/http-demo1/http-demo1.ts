import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ADDED_SUCCESSFULLY, TOOLTIP_TEXT } from '../../constants/messages';

@Component({
  selector: 'smartAssist-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css'
})
export class HttpDemo1 {
  users_api_url = 'https://jsonplaceholder.typicode.com/users';
  tooltiptext: string = TOOLTIP_TEXT;

  constructor(private httpClient: HttpClient) { // Dependency Injection

  }

  ngOnInit() {
    // this.fetchData_javascript();
    this.fetchData_angular();
    this.fetchData_angular_2();
  }

  fetchData_javascript() {
    fetch(this.users_api_url).then(
      (response) => {
        response.json().then(
          finalResponse => {
            console.log(finalResponse)
          }
        )
      },
      (error) => {
        console.log(error)
      }
    )
  }

  fetchData_angular() {
    this.httpClient.get(this.users_api_url).subscribe( // only body
      response => {
        console.log(response);
      }
    )
  }

  fetchData_angular_2() {
    this.httpClient.get(this.users_api_url, { observe: "response" }).subscribe(
      response => {
        console.log(response); // body + status text + status code +etc
      }
    )
  }

}
