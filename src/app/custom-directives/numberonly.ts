import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[smartAssistNumberonly]'
})
export class Numberonly {
  @HostBinding('style.background-color')
  myBgColor: string = '';

  @HostListener('keyup', ['$event'])
  handleKeyUp(evt:any) {
    let regex = new RegExp(/^[0-9]*$/);
    if (!regex.test(evt.target.value)) {
      this.myBgColor = 'red';
    } else {
      this.myBgColor = 'lightgreen';
    }
  }

}
