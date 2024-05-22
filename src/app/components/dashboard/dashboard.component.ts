import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavbarComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  
  firstName: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (user && user.uid) {
      this.authService.getUserDetails(user.uid).then(userDetails => {
        if (userDetails && userDetails.firstName) {
          this.firstName = userDetails.firstName;
        }
      });
    }
  }

    // Method to log when the anchor tag is clicked
    logAnchorClick(): void {
      console.log('Anchor tag clicked!');
    }

}
