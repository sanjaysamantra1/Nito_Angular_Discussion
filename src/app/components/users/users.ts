import { Component } from '@angular/core';
import userData from './user_data';
import { Zoomout } from '../../custom-directives/zoomout';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'smartAssist-users',
  imports: [
    Zoomout,
    RouterLink
  ],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  userArr = userData;
}
