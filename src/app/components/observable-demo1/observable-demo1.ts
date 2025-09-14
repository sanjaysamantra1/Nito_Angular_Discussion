import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { concatMap, filter, forkJoin, interval, map, mergeMap, Observable, of, take } from 'rxjs';

@Component({
  selector: 'smartAssist-observable-demo1',
  imports: [
    CommonModule
  ],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css'
})
export class ObservableDemo1 {
  httpClient = inject(HttpClient);

  ngOnInit() {
    // this.observable_test1()
    this.digital_clock()
    // this.letsLearnPipes();
    // this.forkjoin_demo()
    // this.mergemap_demo()
    this.concatmap_demo()
  }
  observable_test1() {
    const carsPublisher = new Observable((publisher) => {
      publisher.next('Tata');
      publisher.next('Honda');
      publisher.next('Maruti');
      publisher.next('Hyundai');
      publisher.complete();
    });
    carsPublisher.subscribe({
      next: (car) => console.log(car),
      error: (e) => console.error(e),
      complete: () => console.info('completed')
    })
  }

  currentTime$: any;
  digital_clock() {
    this.currentTime$ = new Observable<string>(publisher => {
      setInterval(() => publisher.next(new Date().toLocaleTimeString()), 1000);
    });

    // this.currentTime$.subscribe((val: any)=>console.log(val))
  }

  letsLearnPipes() {
    const numPublisher = interval(1000); // publisher
    // numPublisher.subscribe(val => console.log(val)); // subscriber

    const numsUpto5 = numPublisher.pipe(take(5));
    // numsUpto5.subscribe(val => console.log(val)); // subscriber

    const evenPublisher = numPublisher.pipe(filter(ele => ele % 2 == 0));
    // evenPublisher.subscribe(val => console.log(val));

    const squarePublisher = numPublisher.pipe(map(ele => ele * ele));
    squarePublisher.subscribe(val => console.log(val));
  }

  forkjoin_demo() {
    const urls = [
      'https://jsonplaceholder.typicode.com/users',
      'https://jsonplaceholder.typicode.com/comments',
      'https://jsonplaceholder.typicode.com/todos'
    ];
    const requestArr = urls.map(url => {
      return this.httpClient.get(url)
    });
    forkJoin(requestArr).subscribe((responseArr) => {
      console.log(responseArr);
    })
  }

  mergemap_demo(){
    const userPublisher = of(1,2,3,4,5); // outer observable
    userPublisher.pipe(mergeMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`); // inner observable
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }
  concatmap_demo(){
    const userPublisher = of(1,2,3,4,5); // outer observable
    userPublisher.pipe(concatMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`); // inner observable
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }
}
