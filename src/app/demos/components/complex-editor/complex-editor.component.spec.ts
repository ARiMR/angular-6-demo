import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexEditorComponent } from './complex-editor.component';
import { MaterialModule } from '../../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ComplexEditorComponent', () => {
  let component: ComplexEditorComponent;
  let fixture: ComponentFixture<ComplexEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
      ],
      declarations: [ComplexEditorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
