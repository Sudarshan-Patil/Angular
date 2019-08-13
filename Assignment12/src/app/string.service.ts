import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  public url = "./assets/data/Batches.json";
  constructor(private http:HttpClient) { }

  public getDetails() {
    return this.http.get(this.url);
  }

  public cal(str) {
    return str.replace(/[^A-Z]/g, "").length
  }
}
