import { Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Reservation } from '@core/interfaces/reservation.interface';

@Component({
	selector: 'app-selections-listing',
	templateUrl: './selections-listing.component.html',
	styleUrls: ['./selections-listing.component.scss'],
})
export class SelectionsListingComponent implements OnChanges {
	@HostBinding() class = 'app-selections-listing';

	@Input() selections: Reservation[];
	@Input() screeningId: string;

	selectionsByRow: { rowId: number; seats: number[] }[] = [];

	ngOnChanges(changes: SimpleChanges) {
		if (changes.selections && changes.selections.currentValue) {
			this._onChanges_selections(changes.selections.currentValue);
		}
	}

	private _onChanges_selections(selections: Reservation[]) {
		const selectionsByRow: { rowId: number; seats: number[] }[] = [];

		selections.forEach((reservation) => {
			const selectionIndex = selectionsByRow.findIndex((e) => e.rowId === reservation.rowId);

			if (selectionIndex !== -1) {
				selectionsByRow[selectionIndex].seats.push(reservation.seatId);
			} else {
				selectionsByRow.push({
					rowId: reservation.rowId,
					seats: [reservation.seatId],
				});
			}
		});

		this.selectionsByRow = selectionsByRow.map((sbr) => {
			return {
				...sbr,
				seats: sbr.seats.sort((a, b) => a - b),
			};
		});
	}

	onClick_updateCartButton() {}
}
