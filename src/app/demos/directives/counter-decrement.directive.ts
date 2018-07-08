import { Directive, HostListener } from '@angular/core';
import { CounterComponent } from '../components/counter/counter.component';

@Directive({
  selector: '[ng6CounterDecrement]'
})
export class CounterDecrementDirective {

  constructor(private counter: CounterComponent) {
  }

  @HostListener('click') onMouseClick() {
    this.counter.count--;
  }

}
