import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'smartAssist-contactus',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css'
})
export class Contactus {
  hasChanges = true;

  user = {
    "firstName": "sachin",
    "lastName": "",
    "email": "",
    "address": {
      "city": "",
      "state": "",
      "pin": ""
    }
  }

  submitMyForm(formData: any) {
    console.log(formData);
    this.hasChanges = false;
  }

  constructor(private sanitizer: DomSanitizer) {
  }
  sanitizeMyHTML(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }
}
