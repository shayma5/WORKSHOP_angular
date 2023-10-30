import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private _el:ElementRef) { 
    this._el.nativeElement.style.color='red'
  }

}
