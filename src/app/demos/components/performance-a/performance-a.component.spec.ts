import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAComponent } from './performance-a.component';
import { MaterialModule } from '../../../material/material.module';

describe('PerformanceAComponent', () => {
  let component: PerformanceAComponent;
  let fixture: ComponentFixture<PerformanceAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      declarations: [PerformanceAComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
