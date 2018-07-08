import { Component, OnInit } from '@angular/core';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'ng6-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  animations: [
    trigger('counterAnimation', [
      transition(':increment', group([
        query(':enter', [
          style({ color: 'green', fontSize: '50%' }),
          animate('0.8s ease-out', style('*'))
        ])
      ])),
      transition(':decrement', group([
        query(':enter', [
          style({ color: 'red', fontSize: '50%' }),
          animate('0.8s ease-out', style('*'))
        ])
      ]))
    ])
  ]
})
export class CounterComponent implements OnInit {

  count = 0;

  constructor() {
  }

  ngOnInit() {
  }

}
