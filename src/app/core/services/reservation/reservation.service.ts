import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '@core/interfaces/reservation.interface';

@Injectable({
	providedIn: 'root',
})
export class ReservationService {
	constructor(private http: HttpClient) {}

	getReservations(): Observable<Reservation[]> {
		return this.http.get<Reservation[]>('/api/reservations');
	}

	getReservationsForScreening(screeningId: string): Observable<Reservation[]> {
		return this.http.get<Reservation[]>(`/api/reservations/${screeningId}`);
	}
}
