import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng6MainComponent } from './ng6-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../material/material.module';
import { CardListComponent } from '../../../shared/components/card-list/card-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Ng6MainComponent', () => {
  let component: Ng6MainComponent;
  let fixture: ComponentFixture<Ng6MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      declarations: [
        Ng6MainComponent,
        CardListComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng6MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
