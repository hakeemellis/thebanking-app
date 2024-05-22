// auth.service.ts

import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential, onAuthStateChanged, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //New Way for OnStateChange to store user
  private authStateSubject = new BehaviorSubject<User | null>(null);
  public authState = this.authStateSubject.asObservable();

  //UserData: any; - For old way

  constructor(public auth: Auth, public router: Router) {

        /* OLD WAY
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

  });*/

      // New Way
        onAuthStateChanged(this.auth, (user) => {
          this.authStateSubject.next(user);
          if (user) {
            sessionStorage.setItem('user', JSON.stringify(user));
          } else {
            sessionStorage.removeItem('user');
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
