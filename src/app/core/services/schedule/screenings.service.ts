import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Screening } from '@core/interfaces/schedule.interface';

@Injectable({
	providedIn: 'root',
})
export class ScreeningsService {
	constructor(private http: HttpClient) {}

	getScreenings(): Observable<Screening[]> {
		return this.http.get<Screening[]>('/api/schedules');
	}

	getScreening(movieId: string): Observable<Screening[]> {
		return this.http.get<Screening[]>(`/api/schedules/${movieId}`);
	}

	getTheaterId(movieId: string, time: number): Observable<string> {
		return this.http.get<string>(`/api/schedules/${movieId}/${time}`);
	}
}
