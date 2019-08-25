import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  marvellous = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    lname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    address: new FormControl('', [Validators.required])
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
