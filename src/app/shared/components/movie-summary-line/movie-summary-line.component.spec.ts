import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSummaryLineComponent } from './movie-summary-line.component';

describe('MovieSummaryLineComponent', () => {
  let component: MovieSummaryLineComponent;
  let fixture: ComponentFixture<MovieSummaryLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSummaryLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSummaryLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
