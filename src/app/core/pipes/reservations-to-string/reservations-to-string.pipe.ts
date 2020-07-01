import { Pipe, PipeTransform } from '@angular/core';
import { toLetter } from '@core/functions/toLetter.function';
import { Reservation } from '@core/interfaces/reservation.interface';

@Pipe({
	name: 'reservationsToString',
})
export class ReservationsToStringPipe implements PipeTransform {
	transform(value: Reservation[]): string {
		return value
			.sort((a, b) => {
				return a.rowId !== b.rowId ? a.rowId - b.rowId : a.seatId - b.seatId;
			})
			.map((v) => {
				return toLetter(v.rowId) + v.seatId;
			})
			.join(', ');
	}
}
