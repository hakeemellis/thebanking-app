// auth.guard.ts

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

export const authGuard: CanActivateFn = (route, state) => {
    const auth = inject(Auth);
    const router = inject(Router);

    // Retrieve the user from sessionStorage
    const userString = sessionStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    console.log('Current User:', user); // Debug, to show me who's logged in

    // Modified
    if (!user) {
      router.navigate(['/cannotaccess']);
      alert('Sorry. You will have to login first to access here');
      setTimeout(() => {
          router.navigate(['/login']);
      }, 3000); // Redirect to login after 3 seconds
      return false;
  }

    /* Old way
    if (!user) {
        alert('Sorry. You will have to login first to access here')
        router.navigate(['/login']);
        return false;
    }*/

    return true;
};
