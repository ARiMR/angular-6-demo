import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOnComponent } from './update-on.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('UpdateOnComponent', () => {
  let component: UpdateOnComponent;
  let fixture: ComponentFixture<UpdateOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        NoopAnimationsModule,
      ],
      declarations: [UpdateOnComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
