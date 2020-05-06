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
			rows: 15,
			seatsInRows: 20,
		},
		{
			id: '2',
			label: 'west',
			rows: 10,
			seatsInRows: 15,
		},
	];

	getTheater(theaterID: string): Observable<Theater> {
		return of(this.theaters.find(t => (t.id = theaterID)));
	}
}
