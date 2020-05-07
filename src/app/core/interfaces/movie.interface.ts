export interface MovieShort {
	id: string;
	title: string;
	genre: string;
	length: number;
	productionYear: number;
	releaseDate: number;
	fsk: string;
	posterUrl: string;
}

export interface MovieLong extends MovieShort {
	description: string;
}

export const EMPTY_MOVIE_LONG: MovieLong = {
	id: '',
	title: '',
	genre: '',
	length: 0,
	productionYear: 0,
	releaseDate: 0,
	fsk: '',
	posterUrl: '',
	description: '',
};
