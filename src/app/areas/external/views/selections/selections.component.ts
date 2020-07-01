import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit } from '@angular/core';
import { onSubmit_reservationForm } from '@core/events/onSubmit_reservationForm';
import { MovieShort } from '@core/interfaces/movie.interface';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Screening } from '@core/interfaces/screening.interface';
import { MovieService } from '@core/services/movie/movie.service';
import { ScreeningsService } from '@core/services/schedule/screenings.service';
import { SelectionsService } from '@core/services/selections/selections.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-selections',
	templateUrl: './selections.component.html',
	styleUrls: ['./selections.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectionsComponent implements OnInit {
	@HostBinding() class = 'app-selections';

	moviesScreeningsSelections$: Observable<MoviesScreeningsSelections[]>;

	private _amountOfSelectios: number;

	constructor(
		private _selectionsService: SelectionsService,
		private _movieService: MovieService,
		private _screeningsService: ScreeningsService
	) {}

	ngOnInit() {
		this.moviesScreeningsSelections$ = combineLatest([
			this._selectionsService.getSelectedReservations(),
			this._screeningsService.getScreenings(),
			this._movieService.getMovies(),
		]).pipe(
			map((params: [Reservation[], Screening[], MovieShort[]]) => {
				const [selections, screenings, movies] = params;

				this._amountOfSelectios = selections.length;

				const moviesScreeningsSelections: MoviesScreeningsSelections[] = [];

				selections.forEach((selection) => {
					const screening = screenings.find((s) => s.id === selection.screeningId);
					const movie = movies.find((m) => m.id === screening.movieId);

					const foundMovie: MoviesScreeningsSelections = moviesScreeningsSelections.find(
						(sbs) => sbs.movie.id === movie.id
					);

					if (foundMovie) {
						const foundScreening = foundMovie.screenings.find((s) => s.screening.id === screening.id);

						if (foundScreening) {
							foundScreening.selections.push(selection);
						} else {
							foundMovie.screenings.push({
								screening,
								selections: [selection],
							});
						}
					} else {
						moviesScreeningsSelections.push({
							movie,
							screenings: [
								{
									screening,
									selections: [selection],
								},
							],
						});
					}
				});

				moviesScreeningsSelections.forEach((mss) => mss.screenings.sort((a, b) => a.screening.time - b.screening.time));

				return moviesScreeningsSelections;
			})
		);
	}

	onSubmit__reservationForm(event: onSubmit_reservationForm) {
		let message = 'Your Reservation was successful!';
		message += `\nReservation Nr: ${Math.floor(Math.random() * 1000)}`;
		message += '\n';
		message += '\nDetails';
		message += `\nFirst Name: ${event.firstName}`;
		message += `\nLast Name: ${event.lastName}`;
		message += `\nemail: ${event.email}`;
		message += `\nAmout of Seats: ${this._amountOfSelectios}`;

		alert(message);

		this._selectionsService.clearSelections();
	}
}

interface MoviesScreeningsSelections {
	movie: MovieShort;
	screenings: {
		screening: Screening;
		selections: Reservation[];
	}[];
}
