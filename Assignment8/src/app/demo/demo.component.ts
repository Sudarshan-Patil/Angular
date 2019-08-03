import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @Input() public parentData;
  @Output() obj = new EventEmitter();
  public count=1;

  constructor() { 
  }

  ngOnInit() {
  }

  public sendData()
  {
    this.obj.emit(this.count++);
  }
}
