import { inject } from '@angular/core';
import { authGuard } from './auth.guard';
import { CanActivateFn } from '@angular/router';

export const authChildGuard: CanActivateFn = (route, state) => {
  return authGuard(route, state);
};
