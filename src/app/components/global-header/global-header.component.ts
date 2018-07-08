import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng6-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss']
})
export class GlobalHeaderComponent implements OnInit {

  currentUrl = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      console.log(`Router event ${event.constructor.name}:`, event);
      this.currentUrl = this.router.url;
    });
  }

}
