import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Screening } from '@core/interfaces/screening.interface';

@Injectable({
	providedIn: 'root',
})
export class ScreeningsService {
	constructor(private http: HttpClient) {}

	getScreenings(): Observable<Screening[]> {
		return this.http.get<Screening[]>('/api/screening');
	}

	getScreeningById(screeningId: string): Observable<Screening> {
		return this.http.get<Screening>(`/api/screening/${screeningId}`);
	}
}
