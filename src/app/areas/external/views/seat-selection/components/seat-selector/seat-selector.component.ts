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

	rows: number[];
	seatsInRows: number[];

	maxTranslation = 50;

	ngOnInit(): void {
		this.rows = Array(this.theater.rows)
			.fill(undefined)
			.map((_, i) => i + 1);
		this.seatsInRows = Array(this.theater.seatsInRows)
			.fill(undefined)
			.map((_, i) => i + 1);
	}

	getTranslationYFor(seatId: number): string {
		console.log(seatId, this.theater.seatsInRows);

		const x = (seatId - 1) / this.theater.seatsInRows;

		const a = -4;
		const b = 4;

		const translationY = Math.ceil((a * x ** 2 + b * x) * this.maxTranslation);
		console.log(x, a, b, translationY);

		return `translateY(${translationY}px)`;
	}
}
