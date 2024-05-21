import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChequingService {
  public balance: number = 0; //made it public so other places could access it without a problem

  constructor() { }

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.error('Insufficient funds');
    }
  }
}
