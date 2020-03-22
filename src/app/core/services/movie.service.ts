import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieShort } from '../interfaces/movie.interface';

@Injectable({
	providedIn: 'root',
})
export class MovieService {
	constructor(private http: HttpClient) {}

	getMovies(): Observable<MovieShort[]> {
		return this.http.get<MovieShort[]>('/api/movies');
	}

	getMovie(movieId: string): Observable<MovieShort> {
		return this.http.get<MovieShort>(`/api/movies/${movieId}`);
	}
}
