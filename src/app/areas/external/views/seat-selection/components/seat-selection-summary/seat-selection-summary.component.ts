import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Reservation } from '@core/interfaces/reservation.interface';

@Component({
	selector: 'app-seat-selection-summary',
	templateUrl: './seat-selection-summary.component.html',
	styleUrls: ['./seat-selection-summary.component.scss'],
})
export class SeatSelectionSummaryComponent {
	@HostBinding() class = 'app-seat-selection-summary';
	
	@Input() selections: Reservation[];

	getSelectionsByRow(): { rowId: number; seats: number[] }[] {
		const selectionsByRow: {rowId: number; seats: number[] }[] = [];

		this.selections.forEach((reservation) => {
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

		return selectionsByRow;
	}
}
