import { Theater } from '@core/interfaces/theater.interface';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-seat-selector',
	templateUrl: './seat-selector.component.html',
	styleUrls: ['./seat-selector.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeatSelectorComponent implements OnInit {
	constructor() {}

	@Input() theater: Theater;

	ngOnInit(): void {}
}
