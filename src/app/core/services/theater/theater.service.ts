import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theater } from '@core/interfaces/theater.interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class TheaterService {
	constructor(private http: HttpClient) {}

	getTheaters(): Observable<Theater[]> {
		return this.http.get<Theater[]>(`/api/theaters/`);
	}

	getTheater(theaterId: string): Observable<Theater> {
		return this.http.get<Theater>(`/api/theaters/${theaterId}`);
	}
}
