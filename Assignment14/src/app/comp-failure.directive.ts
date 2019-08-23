import { Directive } from '@angular/core';
import { HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private _obj:ElementRef) { }

  @HostListener ('mouseenter') onmouseenter()
  {
      this._obj.nativeElement.style.color = 'red';
  }

  @HostListener ('mouseleave') onmouseleave()
  {
      this._obj.nativeElement.style.color = 'black';
  }
}
