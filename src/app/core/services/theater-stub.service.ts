import { Theater } from './../interfaces/theater.interface';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

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
			seatsInRows: 30,
		},
		{
			id: '2',
			label: 'west',
			rows: 40,
			seatsInRows: 40,
		},
	];

	getTheater(theaterID: string): Observable<Theater> {
		return of(this.theaters.find(t => (t.id = theaterID)));
	}
}
