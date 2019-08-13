import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  sum=0;
  transform(value: any, ...args: any[]): any {
    switch (args[0])
    {
      case 'prime':
          for(var i=2; i<value; i++) {
            if (value%i == 0) {
              return value + ' is not a prime number';
            }
          }
          return value + ' is a prime number';
          break;
      
      case 'perfect':
          for (i=1; i<value; i++) {
            if (value%i == 0) {
              this.sum += i;
            }
          }
          if (this.sum == value) {
            return value + ' is a perfect number';
          } else {
            return value + ' is not a perfect number';
          }
          break;
      
      case 'even':
      case 'odd':
          if (value%2 == 0) {
            return value + ' is even number';
          } else {
            return value + ' is odd number';
          }
          break;

      default:
          return value;
          break;
    }
  }

}
