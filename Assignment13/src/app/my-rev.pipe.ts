import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  public len;str1='';
  transform(value: any, ...args: any[]): any {
    this.len = value.length;
    for (var i=this.len-1; i>=0; i--) {
      this.str1 += value.charAt(i);
    }
    return this.str1;
  }

}
