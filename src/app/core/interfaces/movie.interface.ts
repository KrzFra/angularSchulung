export interface MovieShort {
	title: string;
	id: string;
	genre: string;
	length: number;
	productionYear: number;
	releaseDate: number;
	fsk: string;
	posterUrl: string;
}

interface MovieExtensionForLong {
	description: string;
}

export type MovieLong = MovieShort & MovieExtensionForLong;
