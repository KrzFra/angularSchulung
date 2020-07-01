import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionsListingComponent } from './selections-listing.component';

describe('SeatSelectionSummaryComponent', () => {
	let component: SelectionsListingComponent;
	let fixture: ComponentFixture<SelectionsListingComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SelectionsListingComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SelectionsListingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
