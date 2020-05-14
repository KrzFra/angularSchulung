import { Screening } from '../../interfaces/screening.interface';
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

				const idBase = i * 3 + 1 + (Number(movieId) - 1) * 21;

				screenings.push(
					{
						id: idBase.toString(),
						time: referenceStartTime.unix() * 1000,
						theaterId: '1',
						movieId,
					},
					{
						id: (idBase + 1).toString(),
						time: referenceStartTime.add(1, 'hour').add(30, 'minutes').unix() * 1000,
						theaterId: '2',
						movieId,
					},
					{
						id: (idBase + 2).toString(),
						time: referenceStartTime.add(2, 'hours').add(15, 'minutes').unix() * 1000,
						theaterId: '1',
						movieId,
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

	getScreeningById(screeningId: string): Observable<Screening> {
		return this.screenings$.pipe(map((ss) => ss.find((s) => s.id === screeningId)));
	}
}
