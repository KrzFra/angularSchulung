import { Injectable } from '@angular/core';
import { theater } from '@core/constants/theater.constant';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Screening } from '@core/interfaces/screening.interface';
import { ScreeningsService } from '@core/services/schedule/screenings.service';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ReservationStubService {
	private reservationsSubject = new ReplaySubject<Reservation[]>(1);
	private reservations$ = this.reservationsSubject.asObservable();

	constructor(private screeningsService: ScreeningsService) {
		this.screeningsService
			.getScreenings()
			.pipe(
				map((screenings: Screening[]) => {
					const reservations: Reservation[] = [];

					screenings.forEach((screening) => {
						for (let row = 1; row <= theater.rows; row++) {
							for (let seat = 1; seat <= theater.seatsInRows; seat++) {
								if (seat <= row) {
									reservations.push({
										screeningId: screening.id,
										row,
										seat,
									});
								}
							}
						}
					});

					this.reservationsSubject.next(reservations);
					this.reservationsSubject.complete();
				})
			)
			.subscribe();
	}

	getReservations(): Observable<Reservation[]> {
		return this.reservations$;
	}

	getReservationsForScreening(screeningId: string): Observable<Reservation[]> {
		return this.reservations$.pipe(map((res) => res.filter((re) => re.screeningId === screeningId)));
	}
}
