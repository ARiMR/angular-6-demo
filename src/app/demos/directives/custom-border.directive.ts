import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ng6CustomBorder]'
})
export class CustomBorderDirective implements AfterViewInit, OnChanges {

  @Input()
  borderSizePx: number;

  color = 'blue';
  style = 'solid';

  constructor(private el: ElementRef<HTMLElement>) {
  }

  ngAfterViewInit(): void {
    this.setBorder();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setBorder();
  }

  @HostListener('mouseover') onMouseOver() {
    this.changeBorderColor('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBorderColor('blue');
  }

  @HostListener('click') onMouseClick() {
    if (this.style === 'solid') {
      this.style = 'dotted';
    } else {
      this.style = 'solid';
    }
    this.setBorder();
  }

  private changeBorderColor(color: string) {
    this.color = color;
    this.setBorder();
  }

  private setBorder() {
    this.el.nativeElement.style.border = `${this.borderSizePx || 1}px ${this.style} ${this.color}`;
    this.el.nativeElement.style.margin = '1em';
    this.el.nativeElement.style.padding = '1em';
  }

}
