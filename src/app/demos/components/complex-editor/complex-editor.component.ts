import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NestedObject } from '../../model/nested-object';

export const COMPLEX_EDITOR_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ComplexEditorComponent),
  multi: true
};

@Component({
  selector: 'ng6-complex-editor',
  templateUrl: './complex-editor.component.html',
  styleUrls: ['./complex-editor.component.scss'],
  providers: [COMPLEX_EDITOR_VALUE_ACCESSOR]
})
export class ComplexEditorComponent implements OnInit, ControlValueAccessor {

  @Input()
  public disabled = false;

  @Input()
  public nestLevel = 0;

  @Output()
  public removeItem = new EventEmitter<void>();

  @Output()
  public change = new EventEmitter<void>();

  public model: NestedObject;


  private changed = ((model: NestedObject) => {
  });
  private touched = ((model: NestedObject) => {
  });

  constructor() {
  }

  ngOnInit() {
  }

  writeValue(value: NestedObject): void {
    this.model = value;
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngModelChange() {
    this.touched(this.model);
    this.changed(this.model);
    this.change.emit();
  }

  addItem() {
    const item: NestedObject = {
      name: '',
      items: []
    };
    this.model.items.push(item);
    this.ngModelChange();
  }

  removeItemClick() {
    this.removeItem.emit();
  }

  deleteItem(index: number) {
    this.model.items.splice(index, 1);
    this.ngModelChange();
  }

}
