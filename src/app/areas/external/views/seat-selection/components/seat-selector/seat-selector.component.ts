import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	HostBinding,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Screening } from '@core/interfaces/screening.interface';
import { Theater } from '@core/interfaces/theater.interface';

@Component({
	selector: 'app-seat-selector',
	templateUrl: './seat-selector.component.html',
	styleUrls: ['./seat-selector.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeatSelectorComponent implements OnInit, OnChanges {
	@HostBinding() class = 'app-seat-selector';

	@Input() screening: Screening;
	@Input() theater: Theater;
	@Input() reservations: Reservation[];
	@Input() selections: Reservation[];

	@Output() seatClicked = new EventEmitter<{ rowId: number; seatId: number }>();
	@Output() resetSelection = new EventEmitter<void>();

	rowsOfSeats: RowData[] = [];

	seatStyle: Record<number, Record<string, string>>;

	ngOnInit() {
		this._setSeats();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.selections) {
			this._onChange_selections(changes.selections.currentValue);
		}
	}

	private _onChange_selections(selections: Reservation[]) {
		this.rowsOfSeats.forEach((row) => {
			row.seats.forEach((seat) => {
				seat.isSelected = selections.some((s) => {
					return s.rowId === row.id && s.seatId === seat.id;
				});
			});
		});
	}

	onClick__seat(rowId: number, seatId: number) {
		this.seatClicked.next({ rowId, seatId });
	}

	onClick__resetButton() {
		this.resetSelection.next();
	}

	private _setSeats() {
		const rowsOfSeats: RowData[] = [];

		for (let rowId = 1; rowId <= this.theater.rows; rowId++) {
			const row: RowData = {
				id: rowId,
				seats: [],
			};

			for (let seatId = 1; seatId <= this.theater.seatsInRows; seatId++) {
				row.seats.push({
					id: seatId,
					isReserved:
						this.reservations.find((r) => {
							return r.rowId === rowId && r.seatId === seatId;
						}) !== undefined,
					isSelected:
						this.selections.find((r) => {
							return r.rowId === rowId && r.seatId === seatId;
						}) !== undefined,
					ngStyle: this._generateSeatNgStyle(seatId),
				});
			}

			rowsOfSeats.push(row);
		}

		this.rowsOfSeats = rowsOfSeats;
	}

	private _generateSeatNgStyle(seatId: number): {} {
		const parabelX = (seatId - 1) / this.theater.seatsInRows;

		const parabelY = -4 * parabelX ** 2 + 4 * parabelX; // parabel with constrictions: [0,0], [0.5,1], [1,0]

		const translationY = Math.ceil(parabelY * 10);
		const rotationZ = Math.floor((1 - parabelY) * 7) * (parabelX > 0.5 ? -1 : 1);

		const transform = `translateY(${translationY}px) rotateZ(${rotationZ}deg)`;

		return { transform };
	}

	existsReservationFor(rowId: number, seatId: number) {
		return this.reservations.some((r) => r.rowId === rowId && r.seatId === seatId);
	}
}

interface RowData {
	id: number;
	seats: SeatData[];
}

interface SeatData {
	id: number;
	isReserved: boolean;
	isSelected: boolean;
	ngStyle: {};
}
