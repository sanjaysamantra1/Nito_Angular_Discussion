import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  // pure: false // impure pipe
})
export class RemainingPipe implements PipeTransform {

  transform(msg: string) {
    console.log('remaining pipe...')
    return 100 - msg.length;
  }

}
