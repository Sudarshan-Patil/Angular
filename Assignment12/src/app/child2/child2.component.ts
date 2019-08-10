import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  public caps;

  constructor(private obj:StringService) { }

  ngOnInit() {
  }

  public calculateCaps(str)
  {
    this.caps = this.obj.cal(str);
  }

}
