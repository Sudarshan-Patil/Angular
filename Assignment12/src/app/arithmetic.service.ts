import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  public sum(no1, no2) {
    return parseFloat(no1) + parseFloat(no2);
  }

  public sub(no1, no2) {
    return parseFloat(no1) - parseFloat(no2);
  }
}
