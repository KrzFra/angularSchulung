import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieLong } from '@core/interfaces/movie.interface';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Theater } from '@core/interfaces/theater.interface';
import { MovieService } from '@core/services/movie/movie.service';
import { ReservationService } from '@core/services/reservation/reservation.service';
import { TheaterService } from '@core/services/theater/theater.service';
import { forkJoin, Subscription } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { ScreeningsService } from './../../../../../core/services/schedule/screenings.service';

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

	movie: MovieLong;
	screeningTime: number;
	theater: Theater;
	reservations: Reservation[];

	subscriptions: Subscription[] = [];

	ngOnInit(): void {
		const subAr = this.activatedRoute.queryParams
			.pipe(
				concatMap((params: { 'movie-id': string; 'screening-time': string }) => {
					const { 'movie-id': movieId, 'screening-time': screeningTimeString } = params;
					this.screeningTime = Number(screeningTimeString);

					return forkJoin({
						movie: this.movieService.getMovie(movieId),
						theaterId: this.screeningsService.getTheaterId(movieId, this.screeningTime),
						reservations: this.reservationService.getReservationsForScreening(movieId, this.screeningTime),
					});
				}),
				concatMap((values: { movie: MovieLong; theaterId: string; reservations: Reservation[] }) => {
					const { movie, theaterId, reservations } = values;

					this.movie = movie;
					this.reservations = reservations;

					return this.theaterService.getTheater(theaterId);
				}),
				map((theater: Theater) => {
					this.theater = theater;

					console.log(this.movie, this.screeningTime, this.theater, this.reservations);
				})
			)
			.subscribe();

		this.subscriptions.push(subAr);
	}

	ngOnDestroy() {
		this.subscriptions.forEach((s) => s.unsubscribe());
	}
}
