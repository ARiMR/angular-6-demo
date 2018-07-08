import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosMainComponent } from './demos-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../material/material.module';
import { CardListComponent } from '../../../shared/components/card-list/card-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DemosMainComponent', () => {
  let component: DemosMainComponent;
  let fixture: ComponentFixture<DemosMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      declarations: [
        DemosMainComponent,
        CardListComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
