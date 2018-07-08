import { Component, OnInit } from '@angular/core';
import { NestedObject } from '../../model/nested-object';

@Component({
  selector: 'ng6-control-value-accessor-demo',
  templateUrl: './control-value-accessor-demo.component.html',
  styleUrls: ['./control-value-accessor-demo.component.scss']
})
export class ControlValueAccessorDemoComponent implements OnInit {

  sampleText = 'Sample text';

  editorDisabled = false;

  nestedObject: NestedObject = {
    name: 'Item A',
    items: [
      {
        name: 'Item X',
        items: []
      },
      {
        name: 'Item Y',
        items: [
          {
            name: 'Item 1',
            items: []
          },
          {
            name: 'Item 2',
            items: []
          }
        ]
      },
      {
        name: 'Item Z',
        items: [
          {
            name: 'Item',
            items: []
          }
        ]
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

  toggleEditor() {
    this.editorDisabled = !this.editorDisabled;
  }
}
