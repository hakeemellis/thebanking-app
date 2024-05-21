//signup.component.ts

import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(public authService: AuthService, private router: Router) {}

  signUp(email: string, password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.authService.signUpWithEmail(email, password)
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.error('Error signing up:', error.message);
        alert('Sign up failed. Please try again.');
      });
  }
}
