import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private userRole = 'student';

  getUserRole() {
    return this.userRole;
  }
}
