import { Schedule } from './../interfaces/schedule.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Schedules } from '@core/interfaces/schedule.interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ScheduleService {
	constructor(private http: HttpClient) {}

	getSchedules(): Observable<Schedules> {
		return this.http.get<Schedules>('/api/schedules');
	}

	getSchedule(movieId: string): Observable<Schedule> {
		return this.http.get<Schedule>(`/api/schedules/${movieId}`);
	}
}
