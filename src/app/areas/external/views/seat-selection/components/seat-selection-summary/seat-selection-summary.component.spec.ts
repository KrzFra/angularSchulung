import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatSelectionSummaryComponent } from './seat-selection-summary.component';

describe('SeatSelectionSummaryComponent', () => {
  let component: SeatSelectionSummaryComponent;
  let fixture: ComponentFixture<SeatSelectionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatSelectionSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatSelectionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
