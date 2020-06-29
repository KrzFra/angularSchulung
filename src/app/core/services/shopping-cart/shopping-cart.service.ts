import { Injectable } from '@angular/core';
import { Reservation } from '@core/interfaces/reservation.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ShoppingCartService {
	selectedReservations = new BehaviorSubject<Reservation[]>([]);

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
}
