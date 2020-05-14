export interface Theater {
	id: string;
	label: string;
	rows: number;
	seatsInRows: number;
}

export const EMPTY_THEATER: Theater = {
	id: '',
	label: '',
	rows: 0,
	seatsInRows: 0,
};
