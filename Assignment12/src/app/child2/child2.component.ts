import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  public caps; httpMsg;

  constructor(private obj:StringService) { }

  ngOnInit() {
    this.httpMsg = this.obj.getDetails();
  }

  public calculateCaps(str)
  {
    this.caps = this.obj.cal(str);
  }

}
