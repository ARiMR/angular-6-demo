import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceBComponent } from './performance-b.component';
import { MaterialModule } from '../../../material/material.module';
import { ColorNamePipe } from '../../pipes/color-name.pipe';

describe('PerformanceBComponent', () => {
  let component: PerformanceBComponent;
  let fixture: ComponentFixture<PerformanceBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      declarations: [
        PerformanceBComponent,
        ColorNamePipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
