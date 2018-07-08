import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const SIMPLE_INPUT_WRAPPER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SimpleInputWrapperComponent),
  multi: true
};

@Component({
  selector: 'ng6-simple-input-wrapper',
  templateUrl: './simple-input-wrapper.component.html',
  styleUrls: ['./simple-input-wrapper.component.scss'],
  providers: [SIMPLE_INPUT_WRAPPER_VALUE_ACCESSOR]
})
export class SimpleInputWrapperComponent implements OnInit, ControlValueAccessor {

  @Input()
  public disabled = false;

  public model: string;

  private changed = ((model: string) => {
  });

  private touched = ((model: string) => {
  });

  constructor() {
  }

  ngOnInit() {
  }

  writeValue(value: string): void {
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
  }

  toUpperCase() {
    this.model = this.model.toUpperCase();
    this.ngModelChange();
  }

  toLowerCase() {
    this.model = this.model.toLowerCase();
    this.ngModelChange();
  }

}
