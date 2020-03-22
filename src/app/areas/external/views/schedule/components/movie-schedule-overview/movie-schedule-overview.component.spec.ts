import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieScheduleOverviewComponent } from './movie-schedule-overview.component';

describe('MovieScheduleComponent', () => {
	let component: MovieScheduleOverviewComponent;
	let fixture: ComponentFixture<MovieScheduleOverviewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MovieScheduleOverviewComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MovieScheduleOverviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
