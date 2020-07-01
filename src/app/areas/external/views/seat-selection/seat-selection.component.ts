import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { theater } from '@core/constants/theater.constant';
import { MovieLong } from '@core/interfaces/movie.interface';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Screening } from '@core/interfaces/screening.interface';
import { Theater } from '@core/interfaces/theater.interface';
import { MovieService } from '@core/services/movie/movie.service';
import { ReservationService } from '@core/services/reservation/reservation.service';
import { ScreeningsService } from '@core/services/schedule/screenings.service';
import { SelectionsService } from '@core/services/selections/selections.service';
import { forkJoin, Observable } from 'rxjs';
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
		private _activatedRoute: ActivatedRoute,
		private _movieService: MovieService,
		private _screeningsService: ScreeningsService,
		private _reservationService: ReservationService,
		private _selectionsService: SelectionsService
	) {}

	movie: MovieLong;
	screening: Screening;
	theater: Theater = theater;
	reservations: Reservation[];
	selections$: Observable<Reservation[]>;

	ngOnInit(): void {
		this._activatedRoute.params
			.pipe(
				concatMap((params: { screeningId: string }) => {
					return this._screeningsService.getScreeningById(params.screeningId);
				}),
				concatMap((screening: Screening) => {
					this.screening = screening;

					this.selections$ = this._selectionsService.getSelectedReservations().pipe(
						map((screenings) => {
							return screenings.filter((s) => s.screeningId === this.screening.id);
						})
					);

					return forkJoin({
						movie: this._movieService.getMovie(this.screening.movieId),
						reservations: this._reservationService.getReservationsForScreening(this.screening.id),
					});
				}),
				map((values: { movie: MovieLong; reservations: Reservation[] }) => {
					const { movie, reservations } = values;

					this.movie = movie;
					this.reservations = reservations;
					return;
				})
			)
			.subscribe();
	}

	onSeatClicked_seatSelector(params: { rowId: number; seatId: number }) {
		const { rowId, seatId } = params;
		this._selectionsService.toggleInSelectedReservations({
			screeningId: this.screening.id,
			rowId,
			seatId,
		});
	}

	onResetSelection__seatSelector() {
		this._selectionsService.removeFromSelectedReservationsByScreeningId(this.screening.id);
	}
}
