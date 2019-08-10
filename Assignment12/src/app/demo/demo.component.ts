import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public addition; subtraction;
  constructor(private obj:ArithmeticService) { }

  ngOnInit() {
  }

  public calculate(no1, no2) {
    this.addition = this.obj.sum(no1, no2);
    this.subtraction = this.obj.sub(no1, no2);
  }

}
