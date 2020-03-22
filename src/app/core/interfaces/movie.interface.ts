export interface MovieShort {
	title: string;
	id: string;
}

interface MovieExtensionForLong {
	description: string;
}

export type MovieLong = MovieShort & MovieExtensionForLong;
