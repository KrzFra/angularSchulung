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

	onSelectionsChanged(selections: Reservation[]) {
		this.selections = selections;

		console.log('this.selections', this.selections);
	}
}
