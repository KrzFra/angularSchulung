import { Injectable } from '@angular/core';
import { Theater } from '@core/interfaces/theater.interface';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class TheaterStubService {
	constructor() {}

	theaters: Theater[] = [
		{
			id: '1',
			label: 'east',
			rows: 20,
			seatsInRows: 15,
		},
		{
			id: '2',
			label: 'west',
			rows: 15,
			seatsInRows: 10,
		},
	];

	getTheater(theaterID: string): Observable<Theater> {
		return of(this.theaters.find(t => (t.id = theaterID)));
	}
}
