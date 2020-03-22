import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MovieShort } from '../interfaces/movie.interface';

@Injectable({
	providedIn: 'root',
})
export class MovieStubService {
	private movies: MovieShort[] = [
		{
			id: '1',
			title: 'Title1',
		},
		{
			id: '2',
			title: 'Title222',
		},
		{
			id: '3',
			title: 'Title3333333',
		},
	];

	getMovies(): Observable<MovieShort[]> {
		return of(this.movies);
	}

	getMovie(movieId: string): Observable<MovieShort> {
		return of(this.movies.find(m => m.id === movieId));
	}
}
