import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionsSummaryComponent } from './selections-summary.component';

describe('SelectionsSummaryComponent', () => {
	let component: SelectionsSummaryComponent;
	let fixture: ComponentFixture<SelectionsSummaryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SelectionsSummaryComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SelectionsSummaryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
