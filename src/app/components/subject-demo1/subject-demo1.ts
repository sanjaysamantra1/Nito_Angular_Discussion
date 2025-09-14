import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'smartAssist-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.html',
  styleUrl: './subject-demo1.css'
})
export class SubjectDemo1 {
  ngOnInit() {
    // this.subject_demo();
    // this.behavioursubject_demo();
    // this.replaysubject_demo();
    this.asyncsubject_demo();
  }
  subject_demo() {
    const publisher = new Subject();
    publisher.next('AAAAA'); // august 2025
    publisher.subscribe(val => console.log('subscriber-1: ', val)); // sept 2025
    publisher.next('BBBBB');
    publisher.subscribe(val => console.log('subscriber-2: ', val)); // sept 2025
    publisher.next('CCCCC');
    publisher.next('DDDDD');
  }
  behavioursubject_demo() {
    const publisher = new BehaviorSubject('Default');
    publisher.next('AAAAA'); // august 2025
    publisher.subscribe(val => console.log('subscriber-1: ', val)); // sept 2025
    publisher.next('BBBBB');
    publisher.subscribe(val => console.log('subscriber-2: ', val)); // sept 2025
    publisher.next('CCCCC');
    publisher.next('DDDDD');
  }
  replaysubject_demo() {
    const publisher = new ReplaySubject();
    publisher.next('AAAAA'); // august 2025
    publisher.subscribe(val => console.log('subscriber-1: ', val)); // sept 2025
    publisher.next('BBBBB');
    publisher.subscribe(val => console.log('subscriber-2: ', val)); // sept 2025
    publisher.next('CCCCC');
    publisher.next('DDDDD');
  }
  asyncsubject_demo() {
    const publisher = new AsyncSubject();
    publisher.next('AAAAA'); // august 2025
    publisher.subscribe(val => console.log('subscriber-1: ', val)); // sept 2025
    publisher.next('BBBBB');
    publisher.subscribe(val => console.log('subscriber-2: ', val)); // sept 2025
    publisher.next('CCCCC');
    publisher.next('DDDDD');
    publisher.complete();
  }
}
