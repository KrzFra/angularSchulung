import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { theater } from '@core/constants/theater.constant';
import { EMPTY_MOVIE_LONG, MovieLong } from '@core/interfaces/movie.interface';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Screening } from '@core/interfaces/screening.interface';
import { Theater } from '@core/interfaces/theater.interface';
import { MovieService } from '@core/services/movie/movie.service';
import { ReservationService } from '@core/services/reservation/reservation.service';
import { ScreeningsService } from '@core/services/schedule/screenings.service';
import { forkJoin } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

@Component({
	selector: 'app-seat-selection',
	templateUrl: './seat-selection.component.html',
	styleUrls: ['./seat-selection.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeatSelectionComponent implements OnInit {
	@HostBinding() class = 'app-seat-selection';

	constructor(
		private activatedRoute: ActivatedRoute,
		private movieService: MovieService,
		private screeningsService: ScreeningsService,
		private reservationService: ReservationService
	) {}

	movie: MovieLong = EMPTY_MOVIE_LONG;
	screening: Screening;
	theater: Theater = theater;
	reservations: Reservation[] = [];
	selections: Reservation[] = [];

	ngOnInit(): void {
		this.activatedRoute.params
			.pipe(
				concatMap((params: { screeningId: string }) => {
					return this.screeningsService.getScreeningById(params.screeningId);
				}),
				concatMap((screening: Screening) => {
					this.screening = screening;

					return forkJoin({
						movie: this.movieService.getMovie(this.screening.movieId),
						reservations: this.reservationService.getReservationsForScreening(this.screening.id),
					});
				}),
				map((values: { movie: MovieLong; reservations: Reservation[] }) => {
					const { movie, reservations } = values;

					this.movie = movie;
					this.reservations = reservations;

					console.log(this.movie, this.theater, this.reservations);
					return;
				})
			)
			.subscribe();
	}

	onSeatClicked_seatSelector(params: { rowId: number; seatId: number }) {
		const { rowId, seatId } = params;
		this._toggleSelection(rowId, seatId);
	}

	onResetSelection__seatSelector() {
		this._resetSelections();
	}

	private _toggleSelection(rowId: number, seatId: number) {
		const hasSelection = this.selections.some((s) => s.row === rowId && s.seat === seatId);

		if (hasSelection) {
			this.selections = this.selections.filter((s) => !(s.row === rowId && s.seat === seatId));
		} else {
			const selections = [...this.selections, { screeningId: this.screening.id, row: rowId, seat: seatId }];

			this.selections = selections.sort((a, b) => {
				if (a.row === b.row) {
					return a.seat - b.seat;
				} else {
					return a.row - b.row;
				}
			});
		}
	}

	private _resetSelections() {
		this.selections = [];
	}
}
