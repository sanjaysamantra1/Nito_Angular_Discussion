import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
  pure: false // impure
})
export class SalutationPipe implements PipeTransform {
  transform(name: string, gender: string) {
    return gender === 'male' ? `Mr. ${name}` : `Miss. ${name}`;
  }
}
