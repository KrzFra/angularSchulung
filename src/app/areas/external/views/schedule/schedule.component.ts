import { ScreeningsService } from '../../../../core/services/schedule/screenings.service';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, HostBinding } from '@angular/core';
import { MovieShort } from '@core/interfaces/movie.interface';
import { MovieService } from '@core/services/movie/movie.service';
import { Observable, Subscription } from 'rxjs';
import { Screening } from '@core/interfaces/screening.interface';

@Component({
	selector: 'app-schedule',
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent implements OnInit {
	@HostBinding() class = 'app-schedule';

	movies$: Observable<MovieShort[]>;
	screeningsByMovie: Record<string, Screening[]> = {};

	constructor(private movieService: MovieService, private screeningsService: ScreeningsService) {}

	ngOnInit() {
		this.movies$ = this.movieService.getMovies();

		this.screeningsService.getScreenings().subscribe((screenings: Screening[]) => {
			const screeningsByMovie: Record<string, Screening[]> = {};

			for (const screening of screenings) {
				const { movieId: movie } = screening;

				if (!(movie in screeningsByMovie)) {
					screeningsByMovie[movie] = [];
				}

				screeningsByMovie[movie].push(screening);
			}

			this.screeningsByMovie = screeningsByMovie;
		});
	}
}
