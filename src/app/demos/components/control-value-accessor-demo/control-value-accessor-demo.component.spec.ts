import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlValueAccessorDemoComponent } from './control-value-accessor-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { SimpleInputWrapperComponent } from '../simple-input-wrapper/simple-input-wrapper.component';
import { ComplexEditorComponent } from '../complex-editor/complex-editor.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ControlValueAccessorDemoComponent', () => {
  let component: ControlValueAccessorDemoComponent;
  let fixture: ComponentFixture<ControlValueAccessorDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        NoopAnimationsModule
      ],
      declarations: [
        ControlValueAccessorDemoComponent,
        SimpleInputWrapperComponent,
        ComplexEditorComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlValueAccessorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
