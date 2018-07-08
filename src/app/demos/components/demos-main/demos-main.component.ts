import { Component, HostBinding, OnInit } from '@angular/core';
import { CardListItem } from '../../../shared/models/card-list-item';
import { routerAnimation } from '../../../core/animations';

@Component({
  selector: 'ng6-demos-main',
  templateUrl: './demos-main.component.html',
  styleUrls: ['./demos-main.component.scss'],
  animations: [routerAnimation]
})
export class DemosMainComponent implements OnInit {

  @HostBinding('@routerAnimation') routerAnimation;

  public items: CardListItem[] = [];

  constructor() {
  }

  ngOnInit() {
    this.items.push({
      url: '/demos/todos',
      title: 'Todos',
      description: 'Simple todo management'
    });
    this.items.push({
      url: '/demos/attribute-directives',
      title: 'Attribute directives',
      description: 'Attribute directives samples'
    });
    this.items.push({
      url: '/demos/structural-directives',
      title: 'Structural directives',
      description: 'Structural directives samples'
    });
    this.items.push({
      url: '/demos/update-on',
      title: 'UpdateOn',
      description: 'Using updateOn with validations'
    });
    this.items.push({
      url: '/demos/performance/1',
      title: 'Performance',
      description: 'part I'
    });
    this.items.push({
      url: '/demos/performance/2',
      title: 'Performance',
      description: 'part II'
    });
    this.items.push({
      url: '/demos/control-value-accessor-demo',
      title: 'Control value accessors',
      description: 'Control value accessors demo'
    });
  }

}
