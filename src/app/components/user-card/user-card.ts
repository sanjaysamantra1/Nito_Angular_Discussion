import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'smartAssist-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
  inputs: ['user'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCard {
  user: any;
  ngDoCheck() {
    console.log('user card ngDoCheck')
  }

  constructor(private cdr: ChangeDetectorRef) {
  }
  refreshData(){
    this.cdr.markForCheck();
  }
}
