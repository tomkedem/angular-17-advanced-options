import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: true
})
export class GenderPipe implements PipeTransform {

  transform(gender: any): string {
    if(gender == 0){
      return 'Male';
    }
    return 'Female';
  }
}
