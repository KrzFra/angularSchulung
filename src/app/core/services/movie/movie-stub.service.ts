import { Injectable } from '@angular/core';
import { MovieLong, MovieShort } from '@core/interfaces/movie.interface';
import { Observable, of } from 'rxjs';

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
			releaseDate: 1293840000000,
			fsk: 'PG1',
			posterUrl: '/assets/movie-poster/movie1.png',
			description:
				// tslint:disable-next-line: max-line-length
				'Description 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		},
		{
			id: '2',
			title: 'Title2',
			genre: 'genre2',
			length: 102,
			productionYear: 2012,
			releaseDate: 1328140800000,
			fsk: 'PG2',
			posterUrl: '/assets/movie-poster/movie2.png',
			description:
				// tslint:disable-next-line: max-line-length
				'Description 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		},
		{
			id: '3',
			title: 'Title3',
			genre: 'genre3',
			length: 103,
			productionYear: 2013,
			releaseDate: 1362268800000,
			fsk: 'PG3',
			posterUrl: '/assets/movie-poster/movie3.png',
			description:
				// tslint:disable-next-line: max-line-length
				'Description 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		},
	];

	getMovies(): Observable<MovieShort[]> {
		const shortenedMovies: MovieShort[] = this.movies.map(
			(movieLong: MovieLong): MovieShort => {
				const movieShort = { ...movieLong };
				delete movieShort.description;

				return movieShort;
			}
		);

		return of(shortenedMovies);
	}

	getMovie(movieId: string): Observable<MovieLong> {
		const movie = this.movies.find(m => m.id === movieId);
		return of(movie);
	}
}
