import { Injectable } from '@angular/core';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScheduleService } from './../schedule/schedule.service';

@Injectable({
	providedIn: 'root',
})
export class ReservationStubService {
	private reservationsSubject = new ReplaySubject<Reservation[]>(1);
	private reservations$ = this.reservationsSubject.asObservable();

	constructor(private scheduleService: ScheduleService) {
		this.scheduleService.getSchedules().subscribe(console.log);
		this.reservationsSubject.next([]);
		this.reservationsSubject.complete();
	}

	getReservations(): Observable<Reservation[]> {
		return this.reservations$;
	}

	getReservationsForScreening(movieId: string, time: number): Observable<Reservation[]> {
		return this.reservations$.pipe(map(res => res.filter(re => re.movie === movieId && re.time === time)));
	}
}
