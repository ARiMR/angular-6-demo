import { Directive, HostListener } from '@angular/core';
import { CounterComponent } from '../components/counter/counter.component';

@Directive({
  selector: '[ng6CounterIncrement]'
})
export class CounterIncrementDirective {

  constructor(private counter: CounterComponent) {
  }

  @HostListener('click') onMouseClick() {
    this.counter.count++;
  }

}
