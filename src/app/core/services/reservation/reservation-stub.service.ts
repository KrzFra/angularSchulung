import { Injectable } from '@angular/core';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ReservationStubService {
	reservations: Reservation[] = [];

	getReservations(): Observable<Reservation[]> {
		return of(this.reservations);
	}

	getReservationsForScreening(movieId: string, time: number): Observable<Reservation[]> {
		return of(this.reservations.filter(r => r.movie === movieId && r.time === time));
	}
}
