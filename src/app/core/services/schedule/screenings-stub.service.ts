import { Screening } from '../../interfaces/schedule.interface';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ScreeningsStubService {
	private screeningSubject = new ReplaySubject<Screening[]>(1);
	private screenings$ = this.screeningSubject.asObservable();

	constructor() {
		const movieIds = ['1', '2', '3'];
		const screenings: Screening[] = [];

		for (const movieId of movieIds) {
			const referenceStartTime = moment().seconds(0).subtract(1, 'day');

			for (let i = 0; i < 7; i++) {
				referenceStartTime.hours(12).minutes(0).add(1, 'day');

				screenings.push(
					{
						time: referenceStartTime.unix() * 1000,
						theater: '1',
						movie: movieId,
					},
					{
						time: referenceStartTime.add(1, 'hour').add(30, 'minutes').unix() * 1000,
						theater: '2',
						movie: movieId,
					},
					{
						time: referenceStartTime.add(2, 'hours').add(15, 'minutes').unix() * 1000,
						theater: '1',
						movie: movieId,
					}
				);
			}
		}

		this.screeningSubject.next(screenings);
		this.screeningSubject.complete();
	}

	getScreenings(): Observable<Screening[]> {
		return this.screenings$;
	}

	getScreening(movieId: string): Observable<Screening[]> {
		return this.screenings$.pipe(map((ss) => ss.filter((s) => s.movie === movieId)));
	}

	getTheaterId(movieId: string, time: number): Observable<string> {
		return this.screenings$.pipe(map((ss) => ss.find((s) => s.movie === movieId && s.time === time).theater));
	}
}
