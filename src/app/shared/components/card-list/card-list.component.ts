import { Component, Input, OnInit } from '@angular/core';
import { CardListItem } from '../../models/card-list-item';

@Component({
  selector: 'ng6-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input()
  public items: CardListItem[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
