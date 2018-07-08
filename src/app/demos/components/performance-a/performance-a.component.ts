import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';
import { Color } from '../../model/color';

@Component({
  selector: 'ng6-performance-a',
  templateUrl: './performance-a.component.html',
  styleUrls: ['./performance-a.component.scss']
})
export class PerformanceAComponent implements OnInit {

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

  public getColorName(color: Color): string {
    console.count('getColorName invoked');
    switch (color) {
      case Color.BLACK:
        return 'Black color';
      case Color.BLUE:
        return 'Blue color';
      case Color.GREEN:
        return 'Green color';
      case Color.RED:
        return 'Red color';
      case Color.WHITE:
        return 'White color';
    }
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
