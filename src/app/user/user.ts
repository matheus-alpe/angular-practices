import { CurrencyPipe, DatePipe, DecimalPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { StarPipe } from '../shared/star-pipe';
import { ReversePipe } from '../shared/reverse-pipe';

@Component({
  selector: 'app-user',
  imports: [
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    TitleCasePipe,
    DecimalPipe,
    StarPipe,
    ReversePipe,
  ],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  name = 'Matheus';
  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
