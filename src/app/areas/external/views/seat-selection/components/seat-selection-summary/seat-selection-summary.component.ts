import { Component, EventEmitter, HostBinding, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Reservation } from '@core/interfaces/reservation.interface';

@Component({
	selector: 'app-seat-selection-summary',
	templateUrl: './seat-selection-summary.component.html',
	styleUrls: ['./seat-selection-summary.component.scss'],
})
export class SeatSelectionSummaryComponent implements OnChanges {
	@HostBinding() class = 'app-seat-selection-summary';

	@Input() selections: Reservation[];

	@Output() updateCart = new EventEmitter<void>();

	selectionsByRow: { rowId: number; seats: number[] }[] = [];

	ngOnChanges(changes: SimpleChanges) {
		if (changes.selections && changes.selections.currentValue) {
			this._onChanges_selections(changes.selections.currentValue);
		}
	}

	private _onChanges_selections(selections: Reservation[]) {
		const selectionsByRow: { rowId: number; seats: number[] }[] = [];

		selections.forEach((reservation) => {
			const selectionIndex = selectionsByRow.findIndex((e) => e.rowId === reservation.row);

			if (selectionIndex !== -1) {
				selectionsByRow[selectionIndex].seats.push(reservation.seat);
			} else {
				selectionsByRow.push({
					rowId: reservation.row,
					seats: [reservation.seat],
				});
			}
		});

		this.selectionsByRow = selectionsByRow;
	}

	onClick_updateCartButton() {}
}
