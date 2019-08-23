import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private _obj:ElementRef) {

  }

  @HostListener ('mouseenter') onmouseenter()
  {
    this._obj.nativeElement.style.color = "green";
  }

  @HostListener ('mouseleave') onmouseleave()
  {
    this._obj.nativeElement.style.color = "black";
  }
}
