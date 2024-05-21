import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TransactionHistoryComponent } from '../transaction-history/transaction-history.component';
import { ChequingService } from '../../services/chequing.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-chequing',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TransactionHistoryComponent, NavbarComponent, FooterComponent],
  templateUrl: './chequing.component.html',
  styleUrl: './chequing.component.scss'
})
export class ChequingComponent implements OnInit {

  constructor(public chequingService: ChequingService) { } // to import chequing service code to use


  ngOnInit(): void {


  }


/* Previous code

  balance: number = 0; // Have to give integer a balance to start | if balance? - it would've turned optional

  constructor() { }

  ngOnInit(): void {

    this.balance = 1000; // Balance is then defined here
  }

 */

}
