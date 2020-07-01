import { Injectable } from '@angular/core';
import { Reservation } from '@core/interfaces/reservation.interface';
import { BehaviorSubject } from 'rxjs';

const testData = [
	{ screeningId: '1', rowId: 1, seatId: 2 },
	{ screeningId: '1', rowId: 2, seatId: 3 },
	{ screeningId: '1', rowId: 2, seatId: 4 },
	{ screeningId: '1', rowId: 1, seatId: 4 },
	{ screeningId: '1', rowId: 1, seatId: 5 },
	{ screeningId: '1', rowId: 2, seatId: 5 },
	{ screeningId: '1', rowId: 2, seatId: 6 },
	{ screeningId: '6', rowId: 1, seatId: 6 },
	{ screeningId: '6', rowId: 1, seatId: 8 },
	{ screeningId: '6', rowId: 6, seatId: 9 },
	{ screeningId: '6', rowId: 6, seatId: 10 },
	{ screeningId: '17', rowId: 1, seatId: 6 },
	{ screeningId: '17', rowId: 1, seatId: 7 },
	{ screeningId: '17', rowId: 2, seatId: 9 },
	{ screeningId: '17', rowId: 3, seatId: 9 },
	{ screeningId: '17', rowId: 3, seatId: 10 },
	{ screeningId: '17', rowId: 4, seatId: 10 },
	{ screeningId: '25', rowId: 6, seatId: 8 },
	{ screeningId: '25', rowId: 6, seatId: 9 },
	{ screeningId: '25', rowId: 6, seatId: 10 },
	{ screeningId: '25', rowId: 5, seatId: 10 },
	{ screeningId: '25', rowId: 5, seatId: 11 },
	{ screeningId: '25', rowId: 6, seatId: 11 },
];

@Injectable({
	providedIn: 'root',
})
export class SelectionsService {
	selectedReservations = new BehaviorSubject<Reservation[]>(testData);

	getSelectedReservations(): BehaviorSubject<Reservation[]> {
		return this.selectedReservations;
	}

	addToSelectedReservations(reservation: Reservation) {
		this.selectedReservations.next([...this.selectedReservations.value, reservation]);
	}

	removeFromSelectedReservations(reservation: Reservation) {
		this.selectedReservations.next(
			this.selectedReservations.value.filter((res) => {
				return !(
					res.screeningId === reservation.screeningId &&
					res.rowId === reservation.rowId &&
					res.seatId === reservation.seatId
				);
			})
		);
	}

	removeFromSelectedReservationsByScreeningId(screeningId: string) {
		this.selectedReservations.next(
			this.selectedReservations.value.filter((res) => {
				return res.screeningId !== screeningId;
			})
		);
	}

	toggleInSelectedReservations(reservation: Reservation) {
		if (
			this.selectedReservations.value.find((res) => {
				return (
					res.screeningId === reservation.screeningId &&
					res.rowId === reservation.rowId &&
					res.seatId === reservation.seatId
				);
			})
		) {
			this.removeFromSelectedReservations(reservation);
		} else {
			this.addToSelectedReservations(reservation);
		}
	}

	clearSelections() {
		this.selectedReservations.next([]);
	}
}
