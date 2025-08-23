import { Component } from '@angular/core';
import userData from './user_data';
import { Zoomout } from '../../custom-directives/zoomout';

@Component({
  selector: 'smartAssist-users',
  imports: [
    Zoomout
  ],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  userArr = userData;
}
