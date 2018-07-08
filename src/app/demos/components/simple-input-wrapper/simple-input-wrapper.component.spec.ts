import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInputWrapperComponent } from './simple-input-wrapper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SimpleInputWrapperComponent', () => {
  let component: SimpleInputWrapperComponent;
  let fixture: ComponentFixture<SimpleInputWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        NoopAnimationsModule
      ],
      declarations: [SimpleInputWrapperComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleInputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
