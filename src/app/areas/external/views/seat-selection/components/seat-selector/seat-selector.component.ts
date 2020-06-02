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

	rows: number[];
	seatsInRows: number[];

	selectionsPerRow: Record<number, Record<number, boolean>>;
	reservationsPerRow: Record<number, Record<number, boolean>>;

	seatStyle: Record<number, Record<string, string>>;

	maxTranslation = 10;

	ngOnInit() {
		this._setSeatStyling();
		this._setReservationsPerRow(this.reservations);
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log('ngOnChangs');
		if (changes.theater) {
			this._setPropertiesFromTheater(changes.theater.currentValue);
		}
		if (changes.selections) {
			this._setSelectionsPerRow(changes.selections.currentValue);
		}
	}

	onClick__seat(rowId: number, seatId: number) {
		this.seatClicked.next({ rowId, seatId });
	}

	private _setPropertiesFromTheater(theaterParam: Theater) {
		this.rows = Array(theaterParam.rows)
			.fill(undefined)
			.map((_, i) => i + 1);
		this.seatsInRows = Array(theaterParam.seatsInRows)
			.fill(undefined)
			.map((_, i) => i + 1);
	}

	onClick__resetButton() {
		this.resetSelection.next();
	}

	private _setSelectionsPerRow(selections: Reservation[]) {
		const selectionsPerRow: Record<number, Record<number, boolean>> = {};

		for (const row of this.rows) {
			selectionsPerRow[row] = {};
			for (const seat of this.seatsInRows) {
				selectionsPerRow[row][seat] = selections.some((s) => s.row === row && s.seat === seat);
			}
		}

		this.selectionsPerRow = selectionsPerRow;
	}

	private _setReservationsPerRow(reservations: Reservation[]) {
		const reservationsPerRow: Record<number, Record<number, boolean>> = {};

		for (const row of this.rows) {
			reservationsPerRow[row] = {};
			for (const seat of this.seatsInRows) {
				reservationsPerRow[row][seat] = reservations.some((s) => s.row === row && s.seat === seat);
			}
		}

		this.reservationsPerRow = reservationsPerRow;
	}

	private _setSeatStyling() {
		const seatStyle = {};

		for (const seat of this.seatsInRows) {
			const parabelX = (seat - 1) / this.theater.seatsInRows;
			const parabelY = -4 * parabelX ** 2 + 4 * parabelX; // parabel with constrictions: [0,0], [0.5,1], [1,0]

			const translationY = Math.ceil(parabelY * this.maxTranslation);
			const rotationZ = Math.floor((1 - parabelY) * 7) * (parabelX > 0.5 ? -1 : 1);

			const transform = `translateY(${translationY}px) rotateZ(${rotationZ}deg)`;

			seatStyle[seat] = { transform };
		}

		this.seatStyle = seatStyle;
	}

	existsReservationFor(rowId: number, seatId: number) {
		return this.reservations.some((r) => r.row === rowId && r.seat === seatId);
	}
}
