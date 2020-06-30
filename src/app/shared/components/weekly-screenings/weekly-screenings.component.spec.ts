import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyScreeningsComponent } from './weekly-screenings.component';

describe('WeeklyScreeningsComponent', () => {
  let component: WeeklyScreeningsComponent;
  let fixture: ComponentFixture<WeeklyScreeningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyScreeningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyScreeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
