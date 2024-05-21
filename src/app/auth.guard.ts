// auth.guard.ts

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

export const authGuard: CanActivateFn = (route, state) => {
    const auth = inject(Auth);
    const router = inject(Router);

    const user = auth.currentUser;

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
