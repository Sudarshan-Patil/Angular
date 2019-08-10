import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  public msg;

  constructor(private obj:NumberService) { }

  ngOnInit() {
  }

  public checkIsPrime(num) {
    if (this.obj.chkPrime(num)) {
      this.msg = num + " is a prime number";
    } else {
      this.msg = num + " is not a prime number";
    }
  }

}
