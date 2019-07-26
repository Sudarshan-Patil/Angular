import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public inputtext;

  fun(str, type)
  {
    if (type == 'U')
    {
      this.inputtext = str.toUpperCase();
    } else {
      this.inputtext = str.toLowerCase();
    }
  }

}
