
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Numberonly } from '../../custom-directives/numberonly';

@Component({
  selector: 'smartAssist-directives-demo',
  imports: [
    FormsModule,
    CommonModule,
    Numberonly
  ],
  templateUrl: './directives-demo.html',
  styleUrl: './directives-demo.css'
})
export class DirectivesDemo {
  num: number = 2;
  // statesArr = ['Odisha','Karnataka','Tamilnadu','Kerala']
  statesArr = [];

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
  ];
  updateEmployees() {
    this.employees = [
      { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
      { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
      { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
      { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
      { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
    ];
  }
  style1 = { color: 'green', 'border': "5px solid red" }
  style2 = { color: 'red', 'border': "5px solid green" }
}
