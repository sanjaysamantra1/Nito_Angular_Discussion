import { Component } from '@angular/core';
import userData from './user_data';
import { Zoomout } from '../../custom-directives/zoomout';
import { RouterLink } from '@angular/router';
import * as CryptoJS from 'crypto-js';

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

  secret_key = 'abc123';

  ngOnInit() {
    // this.setDatainLocalStorage();
    // this.setEncodedDatainLocalStorage();
    this.setEncryptedDatainLocalStorage();
  }

  setDatainLocalStorage() {
    localStorage.setItem('userName', 'Virat Kohli');
    localStorage.setItem('jwtToken', 'eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IntcIkVudGl0eUNvbnRyb2xsZXJJZFwiOjEsXCJFbWFpbFwiOlwic3R1ZGVudEBuaXRvcGx1cy5jb21cIixcIk5pVE9QTFVTUm9sZVwiOjMsXCJVc2VyUm9sZVwiOjIwLFwiRmlyc3ROYW1lXCI6XCJTYWdhclwiLFwiTGFzdE5hbWVcIjpcIlwiLFwiQ291bnRyeUNvZGVcIjpcIis5MVwiLFwiUGhvbmVOdW1iZXJcIjpcIjk4NzY1NDMyMTVcIixcIlBob3RvXCI6XCJodHRwczovL25pdG9zdG9yYWdlLmJsb2IuY29yZS53aW5kb3dzLm5ldC9sb2dvL3Bob3RvLW5vdC1hdmFpbGFibGUucG5nP2lkPURBQkZENzhDLTRDRDQtNDFDNC1CNEY0LUNDODkzMEU0N0JDOFwiLFwiVXNlcklkXCI6XCJlMDlhYWQyNS1mMDBlLTQ1NDAtYTAxOC0yODYzYWIwZDg5OTNcIn0iLCJleHAiOjE3NTkwMzcwNTIsImlzcyI6ImJsYXJ0aW5vLmNvbSIsImF1ZCI6ImQ3MzFhMTgzLTZhNGMtNDU0ZC05ZGM0LTA0Zjc1Mzc3MTc5ZSJ9.sPPJ_tL6l3Y_CGSx701W2dvzEXUeWNsEN_VW01HKwFU');
  }
  setEncodedDatainLocalStorage() {
    // btoa() // encodes
    // atob() // decoded
    localStorage.setItem('userName', btoa('Virat Kohli'));
    localStorage.setItem('jwtToken', btoa('eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5'));
  }
  setEncryptedDatainLocalStorage() {
    const encryptedUserName = CryptoJS.AES.encrypt('Virat Kohli', this.secret_key).toString();
    const encryptedJWT = CryptoJS.AES.encrypt('abcdefghijkl', this.secret_key).toString();
    localStorage.setItem('userName', encryptedUserName);
    localStorage.setItem('jwtToken', encryptedJWT);
  }
}
