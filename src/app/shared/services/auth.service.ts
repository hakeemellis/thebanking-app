// auth.service.ts

import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UserData: any;

  constructor(public auth: Auth, public router: Router) {

          //To check if user is logged in or not
          onAuthStateChanged(this.auth, (user: any) => {
           if (user) {
            this.UserData = user;
            sessionStorage.setItem('user', JSON.stringify(this.UserData));
            JSON.parse(sessionStorage.getItem('user')!);
            console.log('signed in')
            console.error('Auth Local Storage Fix Top');
          } else {
            sessionStorage.setItem('user', 'null');
            JSON.parse(sessionStorage.getItem('user')!);
            console.log('Not Signed');
            console.error('Auth Local Storage Fix');
          }

  });
}

  signUpWithEmail(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(
      this.auth,
      email.trim(),
      password.trim()
    );
  }

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(
        this.auth,
        email.trim(),
        password.trim()
      );
    }

  async signOut(): Promise<void> {
    try {
      await signOut(this.auth);
      this.router.navigate(['/login']);
      console.log('User signed out');
    } catch (error: any) {
      console.error('Error signing out:', error.message);
    }
  }
}
