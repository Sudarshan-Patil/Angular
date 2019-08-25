import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor(public obj:FormBuilder) { }

  ngOnInit() {
  }

  marvellous = this.obj.group({
    fname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    lname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    address: ['', [Validators.required]]
  });

  setData() {
    this.marvellous.setValue({
      fname:'test',
      lname:'test',
      email: 'email',
      phone: '1234567890',
      address: 'pune'
    });
  }
}
