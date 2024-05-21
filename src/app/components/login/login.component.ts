import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
//import { FirebaseAuthService } from '../../services/firebase.service';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public router: Router, public authService: AuthService) {}



  signIn(event: Event, email: string, password: string) {
    event.preventDefault();  // Prevent default form submission

    this.authService.login(email, password)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(error => {
        console.error('Error signing in:', error.message);
        alert('Sign in failed. Please try again.');
      })
      .finally(() => {
        // Clear sensitive data from memory
        email = '';
        password = '';
      });

  }

}
