import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	HostBinding,
	Input,
	OnInit,
	Output,
	QueryList,
	ViewChildren,
} from '@angular/core';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Screening } from '@core/interfaces/screening.interface';
import { Theater } from '@core/interfaces/theater.interface';
import { SeatComponent } from './components/seat/seat.component';

@Component({
	selector: 'app-seat-selector',
	templateUrl: './seat-selector.component.html',
	styleUrls: ['./seat-selector.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeatSelectorComponent implements OnInit {
	@HostBinding() class = 'app-seat-selector';

	@Input() screening: Screening;
	@Input() theater: Theater;
	@Input() reservations: Reservation[];

	@Output() selectionsChanged = new EventEmitter<Reservation[]>();

	rows: number[];
	seatsInRows: number[];

	maxTranslation = 10;

	selections: Reservation[] = [];

	@ViewChildren(SeatComponent) seats: QueryList<SeatComponent>;

	ngOnInit(): void {
		this.rows = Array(this.theater.rows)
			.fill(undefined)
			.map((_, i) => i + 1);
		this.seatsInRows = Array(this.theater.seatsInRows)
			.fill(undefined)
			.map((_, i) => i + 1);
	}

	getTransformFor(seatId: number): string {
		const parabelX = (seatId - 1) / this.theater.seatsInRows;
		const parabelY = -4 * parabelX ** 2 + 4 * parabelX; // parabel with constrictions: [0,0], [0.5,1], [1,0]

		const translationY = Math.ceil(parabelY * this.maxTranslation);
		const rotationZ = Math.floor((1 - parabelY) * 7) * (parabelX > 0.5 ? -1 : 1);

		return `translateY(${translationY}px) rotateZ(${rotationZ}deg)`;
	}

	existsReservationFor(rowId: number, seatId: number) {
		return this.reservations.some((r) => r.row === rowId && r.seat === seatId);
	}

	onSeatSelectionChanged(row: number, seat: number, selection: boolean) {
		this.selections = selection
			? [...this.selections, { screeningId: this.screening.id, seat, row }]
			: this.selections.filter((s) => !(s.row === row && s.seat === seat));

		this.selectionsChanged.next(this.selections);
	}

	deselectSeats() {
		this.seats.forEach((s) => s.deselect());
		this.selections = [];
		this.selectionsChanged.next(this.selections);
	}
}
