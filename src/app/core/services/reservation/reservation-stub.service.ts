import { Injectable } from '@angular/core';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Screening } from '@core/interfaces/schedule.interface';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScreeningsService } from './../schedule/screenings.service';

@Injectable({
	providedIn: 'root',
})
export class ReservationStubService {
	private reservationsSubject = new ReplaySubject<Reservation[]>(1);
	private reservations$ = this.reservationsSubject.asObservable();

	constructor(private screeningsService: ScreeningsService) {
		const reservations = [];

		this.screeningsService.getScreenings().subscribe((screenings: Screening[]) => {
			console.log(screenings);

			this.reservationsSubject.next([]);
			this.reservationsSubject.complete();
		});
	}

	getReservations(): Observable<Reservation[]> {
		return this.reservations$;
	}

	getReservationsForScreening(movieId: string, time: number): Observable<Reservation[]> {
		return this.reservations$.pipe(map((res) => res.filter((re) => re.movie === movieId && re.time === time)));
	}
}
