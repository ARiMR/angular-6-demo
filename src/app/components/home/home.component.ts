import { Component, HostBinding, OnInit } from '@angular/core';
import { routerAnimation } from '../../core/animations';

@Component({
  selector: 'ng6-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerAnimation]
})
export class HomeComponent implements OnInit {

  @HostBinding('@routerAnimation') routerAnimation;

  constructor() {
  }

  ngOnInit() {
  }

}
