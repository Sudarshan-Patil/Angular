import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ArithmeticService } from './arithmetic.service';
import { NumberService } from './number.service';
import { StringService } from './string.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ArithmeticService,
    NumberService,
    StringService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
