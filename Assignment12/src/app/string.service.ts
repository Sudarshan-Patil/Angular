import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public cal(str) {
    return str.replace(/[^A-Z]/g, "").length
  }
}
