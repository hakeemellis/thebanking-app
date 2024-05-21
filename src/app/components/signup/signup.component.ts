//signup.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(public authService: AuthService, private router: Router) {}

  signUp(event: Event, email: string, password: string, confirmPassword: string) {
    event.preventDefault();  // Prevent default form submission
    console.log('Form submitted:', email, password, confirmPassword); // Debugging line
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.authService.signUpWithEmail(email, password)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(error => {
        console.error('Error signing up:', error.message);
        alert('Sign up failed. Please try again.');
      })
      .finally(() => {
        // Clear sensitive data from memory
        email = '';
        password = '';
      });
  }
}