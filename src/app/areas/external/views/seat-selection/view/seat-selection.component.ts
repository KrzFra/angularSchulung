import { Screening } from '@core/interfaces/screening.interface';
import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY_MOVIE_LONG, MovieLong } from '@core/interfaces/movie.interface';
import { Reservation } from '@core/interfaces/reservation.interface';
import { EMPTY_THEATER, Theater } from '@core/interfaces/theater.interface';
import { MovieService } from '@core/services/movie/movie.service';
import { ReservationService } from '@core/services/reservation/reservation.service';
import { ScreeningsService } from '@core/services/schedule/screenings.service';
import { TheaterService } from '@core/services/theater/theater.service';
import { forkJoin, Subscription } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

@Component({
	selector: 'app-seat-selection',
	templateUrl: './seat-selection.component.html',
	styleUrls: ['./seat-selection.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeatSelectionComponent implements OnInit, OnDestroy {
	@HostBinding() class = 'app-seat-selection';

	constructor(
		private activatedRoute: ActivatedRoute,
		private movieService: MovieService,
		private screeningsService: ScreeningsService,
		private theaterService: TheaterService,
		private reservationService: ReservationService
	) {}

	screeningId = '';
	movie: MovieLong = EMPTY_MOVIE_LONG;
	screeningTime = 0;
	theater: Theater = EMPTY_THEATER;
	reservations: Reservation[] = [];
	selections: Reservation[] = [];

	subscriptions: Subscription[] = [];

	ngOnInit(): void {
		this.subscriptions.push(
			this.activatedRoute.params
				.pipe(
					concatMap((params: { screeningId: string }) => {
						this.screeningId = params.screeningId;

						return this.screeningsService.getScreeningById(this.screeningId);
					}),
					concatMap((screening: Screening) => {
						console.log('screening', screening);

						return forkJoin({
							movie: this.movieService.getMovie(screening.movieId),
							theater: this.theaterService.getTheater(screening.theaterId),
							reservations: this.reservationService.getReservationsForScreening(screening.id),
						});
					}),
					map((values: { movie: MovieLong; theater: Theater; reservations: Reservation[] }) => {
						const { movie, theater, reservations } = values;

						this.movie = movie;
						this.reservations = reservations;
						this.theater = theater;

						console.log(this.movie, this.screeningTime, this.theater, this.reservations);
						return;
					})
				)
				.subscribe()
		);
	}

	ngOnDestroy() {
		this.subscriptions.forEach((s) => s.unsubscribe());
	}

	onSelectionsChanged(selections: Reservation[]) {
		this.selections = selections;

		console.log('this.selections', this.selections);
	}
}
