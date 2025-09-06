import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'smartAssist-userdetails',
  imports: [],
  templateUrl: './userdetails.html',
  styleUrl: './userdetails.css'
})
export class Userdetails {
  user: any;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      const userId = +params['id'];
      const user_api = `https://jsonplaceholder.typicode.com/users/${userId}`
      this.httpClient.get(user_api).subscribe(userResponse => {
        this.user = userResponse;
      })
    })
  }
}
