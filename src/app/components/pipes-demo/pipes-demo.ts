import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { SalutationPipe } from '../../custom-pipes/salutation-pipe';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom-pipes/remaining-pipe';
import { MysortPipe } from '../../custom-pipes/mysort-pipe';

@Component({
  selector: 'smartAssist-pipes-demo',
  imports: [
    CommonModule,
    SalutationPipe,
    FormsModule,
    RemainingPipe,
    MysortPipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css'
})
export class PipesDemo {
  myName: string = 'Sachin tEnDulKaR';
  mySal: number = 5000;
  dateObj = new Date();
  msg: string = '';

  user = { name: 'Sanjay Kumar', age: 45, add: 'Bangalore' };
  cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota', 'Mahindra'];

  num = interval(2000); // num is observable

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];

  arr = [20, 50, 10, 60, 30, 40];
}
