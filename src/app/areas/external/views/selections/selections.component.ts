import { Component, HostBinding, OnInit } from '@angular/core';
import { MovieShort } from '@core/interfaces/movie.interface';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Screening } from '@core/interfaces/screening.interface';
import { MovieService } from '@core/services/movie/movie.service';
import { ScreeningsService } from '@core/services/schedule/screenings.service';
import { ShoppingCartService } from '@core/services/shopping-cart/shopping-cart.service';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-selections',
	templateUrl: './selections.component.html',
	styleUrls: ['./selections.component.scss'],
})
export class SelectionsComponent implements OnInit {
	@HostBinding() class = 'app-selections';

	selectionsByScreening$: Observable<MovieSelections[]>;

	constructor(
		private shoppingCartService: ShoppingCartService,
		private movieService: MovieService,
		private screeningsService: ScreeningsService
	) {}

	ngOnInit() {
		this.selectionsByScreening$ = zip(
			this.shoppingCartService.getSelectedReservations(),
			this.screeningsService.getScreenings(),
			this.movieService.getMovies()
		).pipe(
			map((params: [Reservation[], Screening[], MovieShort[]]) => {
				const [selections, screenings, movies] = params;

				const selectionsByScreening: MovieSelections[] = [];

				selections.forEach((selection) => {
					const screening = screenings.find((s) => s.id === selection.screeningId);
					const movie = movies.find((m) => m.id === screening.movieId);

					const foundMovieSelection: MovieSelections = selectionsByScreening.find((sbs) => sbs.movie.id === movie.id);

					if (foundMovieSelection) {
						const foundScreening = foundMovieSelection.screenings.find((s) => s.screening.id === screening.id);

						if (foundScreening) {
							foundScreening.selections.push(selection);
						} else {
							foundMovieSelection.screenings.push({
								screening,
								selections: [selection],
							});
						}
					} else {
						selectionsByScreening.push({
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

				console.log(selectionsByScreening);

				return selectionsByScreening;
			})
		);
	}
}

interface MovieSelections {
	movie: MovieShort;
	screenings: {
		screening: Screening;
		selections: Reservation[];
	}[];
}
