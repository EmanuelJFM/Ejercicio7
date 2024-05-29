import { CanActivateFn } from '@angular/router';

export const authPatientGuard: CanActivateFn = (route, state) => {
  return true;
};
