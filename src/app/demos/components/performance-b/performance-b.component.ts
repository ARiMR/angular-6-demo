import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';
import { Color } from '../../model/color';

@Component({
  selector: 'ng6-performance-b',
  templateUrl: './performance-b.component.html',
  styleUrls: ['./performance-b.component.scss']
})
export class PerformanceBComponent implements OnInit {


  items: Item[] = [];
  lastId = 0;

  constructor() {
  }

  ngOnInit() {
  }

  add100Items() {
    for (let i = 1; i <= 100; i++) {
      this.addItem();
    }
  }

  public addItem() {
    this.lastId = this.lastId + 1;
    this.items.push({
      id: this.lastId,
      name: `item #${this.lastId}`,
      color: this.getColor(this.lastId)
    });
  }

  private getColor(i: number): Color {
    switch (i % 5) {
      case 0:
        return Color.BLACK;
      case 1:
        return Color.BLUE;
      case 2:
        return Color.GREEN;
      case 3:
        return Color.RED;
      case 4:
        return Color.WHITE;
    }

  }

}
