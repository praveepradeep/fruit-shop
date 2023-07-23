import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (): boolean => {
  const oauthService: AuthService = inject(AuthService);
  if (oauthService.isLoggedIn()) {
    return true;
  }
  oauthService.login();
  return false;
};
