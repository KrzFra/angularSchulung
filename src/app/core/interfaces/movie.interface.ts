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
