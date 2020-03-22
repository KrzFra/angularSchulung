import { MovieLong } from './../interfaces/movie.interface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieShort } from '../interfaces/movie.interface';

@Injectable({
	providedIn: 'root',
})
export class MovieStubService {
	private movies: MovieLong[] = [
		{
			id: '1',
			title: 'Title1',
			genre: 'genre1',
			length: 101,
			productionYear: 2011,
			releaseDate: new Date(1293840000000),
			fsk: 'PG1',
			posterUrl: '/assets/movie-poster/movie1.png',
			description: '',
		},
		{
			id: '2',
			title: 'Title2',
			genre: 'genre2',
			length: 102,
			productionYear: 2012,
			releaseDate: new Date('2012-02-02'),
			fsk: 'PG2',
			posterUrl: '/assets/movie-poster/movie2.png',
			description: '',
		},
		{
			id: '3',
			title: 'Title3',
			genre: 'genre3',
			length: 103,
			productionYear: 2013,
			releaseDate: new Date('2013-03-03'),
			fsk: 'PG3',
			posterUrl: '/assets/movie-poster/movie3.png',
			description: '',
		},
	];

	getMovies(): Observable<MovieShort[]> {
		const transformedMovies: MovieShort[] = this.movies.map((movieLong: MovieLong) => {
			delete movieLong.description;

			return movieLong;
		});

		return of(transformedMovies);
	}

	getMovie(movieId: string): Observable<MovieShort> {
		return of(this.movies.find(m => m.id === movieId));
	}
}
