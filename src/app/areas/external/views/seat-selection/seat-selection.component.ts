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
import { ShoppingCartService } from '@core/services/shopping-cart/shopping-cart.service';
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
		private activatedRoute: ActivatedRoute,
		private movieService: MovieService,
		private screeningsService: ScreeningsService,
		private reservationService: ReservationService,
		private shoppingCartService: ShoppingCartService
	) {}

	movie: MovieLong;
	screening: Screening;
	theater: Theater = theater;
	reservations: Reservation[];
	selections$: Observable<Reservation[]>;

	ngOnInit(): void {
		this.activatedRoute.params
			.pipe(
				concatMap((params: { screeningId: string }) => {
					return this.screeningsService.getScreeningById(params.screeningId);
				}),
				concatMap((screening: Screening) => {
					this.screening = screening;

					this.selections$ = this.shoppingCartService.getSelectedReservations().pipe(
						map((screenings) => {
							return screenings.filter((s) => s.screeningId === this.screening.id);
						})
					);

					return forkJoin({
						movie: this.movieService.getMovie(this.screening.movieId),
						reservations: this.reservationService.getReservationsForScreening(this.screening.id),
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
		this.shoppingCartService.toggleInSelectedReservations({
			screeningId: this.screening.id,
			rowId,
			seatId,
		});
	}

	onResetSelection__seatSelector() {
		this.shoppingCartService.removeFromSelectedReservationsByScreeningId(this.screening.id);
	}
}
