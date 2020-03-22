import { MovieStubService } from './../services/movie-stub.service';
import { MovieService } from './../services/movie.service';
import { Provider } from '@angular/core';
import { environment } from 'src/environments/environment';

const useMovieService: Provider = {
	provide: MovieService,
	useClass: MovieService,
};

const useMovieStubService: Provider = {
	provide: MovieService,
	useClass: MovieStubService,
};

export const movieStubServiceProvider: Provider = environment.useMovieStubService
	? useMovieStubService
	: useMovieService;
