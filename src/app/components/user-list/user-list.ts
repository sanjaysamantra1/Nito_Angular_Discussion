import { Component } from '@angular/core';
import { UserCard } from "../user-card/user-card";

@Component({
  selector: 'smartAssist-user-list',
  imports: [UserCard],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  usersArr = [
    { "id": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "id": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "id": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "id": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "id": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ]
  sayHi() {
    console.log('Hiiiii');
  }
  changeData() {
    this.usersArr[0].sal = 5500;
  }
}
