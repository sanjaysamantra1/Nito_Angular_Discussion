import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'smartAssist-aboutus',
  imports: [RouterLink],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css'
})
export class Aboutus {
  constructor(private router: Router) {

  }
  doSomethingAndGoToHome() {
    console.log('Do Something...'); // any logic
    this.router.navigateByUrl('home');
  }
}
