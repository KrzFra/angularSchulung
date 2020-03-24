import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-seat-selection-summary',
	templateUrl: './seat-selection-summary.component.html',
	styleUrls: ['./seat-selection-summary.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeatSelectionSummaryComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
