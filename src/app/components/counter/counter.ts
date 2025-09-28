import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../../state_mgmt/actions/counter.actions';

@Component({
  selector: 'smartAssist-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.select((state: any) => state.count); // Selector
  }
  incrementCount() {
    const actionObj = increment();
    this.store.dispatch(actionObj);
  }
  decrementCount() {
    this.store.dispatch(decrement());
  }
  resetCount() {
    this.store.dispatch({ type: '[Counter] Reset' })
  }
}
