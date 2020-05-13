import { Injectable } from '@angular/core';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Screening } from '@core/interfaces/screening.interface';
import { Theater } from '@core/interfaces/theater.interface';
import { ScreeningsService } from '@core/services/schedule/screenings.service';
import { TheaterService } from '@core/services/theater/theater.service';
import { forkJoin, Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ReservationStubService {
	private reservationsSubject = new ReplaySubject<Reservation[]>(1);
	private reservations$ = this.reservationsSubject.asObservable();

	constructor(private screeningsService: ScreeningsService, private theaterService: TheaterService) {
		forkJoin({
			screenings: this.screeningsService.getScreenings(),
			theaters: this.theaterService.getTheaters(),
		})
			.pipe(
				map((params: { screenings: Screening[]; theaters: Theater[] }) => {
					const { screenings, theaters } = params;

					const reservations: Reservation[] = [];

					screenings.forEach((screening) => {
						const currentTheater = theaters.find((t) => t.id === screening.theaterId);

						for (let row = 1; row <= currentTheater.rows; row++) {
							for (let seat = 1; seat <= currentTheater.seatsInRows; seat++) {
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
