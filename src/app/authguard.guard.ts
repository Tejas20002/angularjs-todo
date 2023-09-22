import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  if(localStorage.getItem('login') == 'false'){
    alert("unAuthorized person!!");
    router.navigate(['/']);
    return false;
  }    
    return true;
};
