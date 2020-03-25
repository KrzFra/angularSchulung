import { Injectable } from '@angular/core';
import { Schedule, Schedules } from '@core/interfaces/schedule.interface';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ScheduleStubService {
	private schedules: Schedules = {};

	constructor() {
		const movieIds = ['1', '2', '3'];

		for (const id of movieIds) {
			let scheduleForCurrentId: Schedule = [];

			const referenceStartTime = moment()
				.seconds(0)
				.subtract(1, 'day');

			for (let i = 0; i < 7; i++) {
				referenceStartTime
					.hours(12)
					.minutes(0)
					.add(1, 'day');

				scheduleForCurrentId = [
					...scheduleForCurrentId,
					{
						time: referenceStartTime.unix() * 1000,
						theater: '1',
					},
					{
						time:
							referenceStartTime
								.add(1, 'hour')
								.add(30, 'minutes')
								.unix() * 1000,
						theater: '2',
					},
					{
						time:
							referenceStartTime
								.add(2, 'hours')
								.add(15, 'minutes')
								.unix() * 1000,
						theater: '1',
					},
				];
			}

			this.schedules[id] = scheduleForCurrentId;
		}
	}

	getSchedules(): Observable<Schedules> {
		return of(this.schedules);
	}

	getSchedule(movieId: string): Observable<Schedule> {
		return of(this.schedules[movieId]);
	}

	getTheaterId(movieId: string, time: number): Observable<string> {
		return of(this.schedules[movieId].find(s => s.time === time).theater);
	}
}
