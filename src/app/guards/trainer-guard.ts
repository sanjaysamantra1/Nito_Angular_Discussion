import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserInfoService } from '../services/user-info-service';

export const trainerGuard: CanActivateFn = (route, state) => {
  const userInfoService = inject(UserInfoService);

  if (userInfoService.getUserRole() === 'trainer') {
    return true;
  } else {
    alert('Sorry!!!, You dont have access to this page!!')
    return false;
  }
};
