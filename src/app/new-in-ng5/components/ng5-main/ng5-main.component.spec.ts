import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng5MainComponent } from './ng5-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../material/material.module';
import { CardListComponent } from '../../../shared/components/card-list/card-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Ng5MainComponent', () => {
  let component: Ng5MainComponent;
  let fixture: ComponentFixture<Ng5MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      declarations: [
        Ng5MainComponent,
        CardListComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng5MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
