// auth.service.ts

import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UserData: any;

  constructor(public auth: Auth, public router: Router) {}

  async signUpWithEmail(email: string, password: string): Promise<void> {
    try {
      console.log('good 1')
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('good 2')
      this.UserData = userCredential.user;
      console.log('good 3')
      sessionStorage.setItem('user', JSON.stringify(this.UserData));
      console.log('good 4')
      console.log('User signed up:', this.UserData);
      this.router.navigate(['/dashboard']); // Navigate to the desired route after sign-up
    } catch (error: any) {
      console.error('Error signing up:', error.message);
      alert(`Sign up failed. ${error.message}`);
    }
  }

  async signOut(): Promise<void> {
    try {
      await signOut(this.auth);
      sessionStorage.removeItem('user');
      this.router.navigate(['/login']);
      console.log('User signed out');
    } catch (error: any) {
      console.error('Error signing out:', error.message);
    }
  }
}

