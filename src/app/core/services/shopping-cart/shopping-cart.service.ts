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
					res.row === reservation.row &&
					res.seat === reservation.seat
				);
			})
		);
	}
}
