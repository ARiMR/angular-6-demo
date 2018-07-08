import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectivesComponent } from './attribute-directives.component';
import { BorderedDirective } from '../../directives/bordered.directive';
import { CounterIncrementDirective } from '../../directives/counter-increment.directive';
import { CustomBorderDirective } from '../../directives/custom-border.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { CounterComponent } from '../counter/counter.component';
import { CounterDecrementDirective } from '../../directives/counter-decrement.directive';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AttributeDirectivesComponent', () => {
  let component: AttributeDirectivesComponent;
  let fixture: ComponentFixture<AttributeDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        NoopAnimationsModule,
      ],
      declarations: [
        AttributeDirectivesComponent,
        BorderedDirective,
        CustomBorderDirective,
        CounterIncrementDirective,
        CounterDecrementDirective,
        CounterComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
