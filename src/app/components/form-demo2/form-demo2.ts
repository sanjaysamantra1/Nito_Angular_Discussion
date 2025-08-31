import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'smartAssist-form-demo2',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-demo2.html',
  styleUrl: './form-demo2.css'
})
export class FormDemo2 {
  user = {
    "firstName": "",
    "lastName": "",
    "email": "sanjaysamantra2@gmail.com",
    "address": {
      "city": "Bangalore",
      "state": "Karnātaka",
      "pin": "560037"
    }
  }

  submitMyForm(formData: any) {
    console.log(formData)
  }
}
