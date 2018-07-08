import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ng6Bordered]'
})
export class BorderedDirective {

  constructor(el: ElementRef<HTMLElement>) {
    el.nativeElement.style.border = '1px dashed red';
    el.nativeElement.style.margin = '1em';
  }

}
