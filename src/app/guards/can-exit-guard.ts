import { CanDeactivateFn } from '@angular/router';

export const canExitGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {
  if (component.hasChanges) {
    alert('Please Save the current page before you proceed to another page')
    return false;
  } else {
    return true;
  }
};
