import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const authStatus = inject(AuthService)
  const router = inject(Router)

  if(authStatus.isLogged()){
    return true;
  }
  else{
    alert('Please login!')

    router.navigateByUrl("")
    return false
  }
};
