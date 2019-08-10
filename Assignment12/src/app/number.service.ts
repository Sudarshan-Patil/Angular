import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public chkPrime(number) {
    var num =parseFloat(number);
    for(var i=2; i < num; i++) {
      if (num%i == 0) {
        return false;
      }
    }
    return true;
  }
}
