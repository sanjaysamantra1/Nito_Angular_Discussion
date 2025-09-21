import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, Signal, signal, WritableSignal } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'smartAssist-signal-demo',
  imports: [
  ],
  templateUrl: './signal-demo.html',
})
export class SignalDemo {
  cookieCount: WritableSignal<number> = signal(10);

  butter = computed(() => this.cookieCount() * 0.1);
  sugar = computed(() => this.cookieCount() * 0.05);
  flour = computed(() => this.cookieCount() * 0.2);

  update(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cookieCount.set(parseInt(input.value));
  }
  // Signal For cart Price
  qty = signal(1);
  price = signal(100);
  totalAmt = computed(() => this.qty() * this.price());

  setQuantity(evt: any) {
    this.qty.set(evt.target.value)
  }


  // signal for square and cube
  num: WritableSignal<number> = signal(0);
  messages: WritableSignal<string[]> = signal([]);
  numDouble: Signal<number> = computed(() => this.num() * 2);
  numSquare: Signal<number> = computed(() => this.num() * this.num());

  increment() {
    this.num.update((value: number) => value + 1)
    this.messages.set([...this.messages(), `Value of Num is: ${this.num()}`]);
  }
  decrement() {
    this.num.update((val: number) => val - 1);
    this.messages().pop()
    this.messages.set([... this.messages()]);
  }
  reset() {
    this.num.set(0);
    this.messages.set([]);
  }


  // signal & effect for userData
  httpClient = inject(HttpClient);
  userData: any;

  userId = signal(1);

  userEffect = effect(() => {
    console.log(this.userId());
    this.fetchUserData();
  });
  updateUserId(event: any) {
    this.userId.set(event.target.value)
  }

  fetchUserData() {
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${this.userId()}`).subscribe(
      response => {
        this.userData = response;
      }
    )
  }
}
