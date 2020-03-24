import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSummaryLongComponent } from './movie-summary-long.component';

describe('MovieSummaryLongComponent', () => {
	let component: MovieSummaryLongComponent;
	let fixture: ComponentFixture<MovieSummaryLongComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MovieSummaryLongComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MovieSummaryLongComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
