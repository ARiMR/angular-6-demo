import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesComponent } from './structural-directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { IfNotDirective } from '../../directives/if-not.directive';
import { TimesDirective } from '../../directives/times.directive';

describe('StructuralDirectivesComponent', () => {
  let component: StructuralDirectivesComponent;
  let fixture: ComponentFixture<StructuralDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
      ],
      declarations: [
        StructuralDirectivesComponent,
        IfNotDirective,
        TimesDirective
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
