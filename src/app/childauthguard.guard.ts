import { CanActivateChildFn } from '@angular/router';

export const childauthguardGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
