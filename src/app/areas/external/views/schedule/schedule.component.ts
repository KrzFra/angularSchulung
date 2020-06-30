import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { MovieShort } from '@core/interfaces/movie.interface';
import { Screening } from '@core/interfaces/screening.interface';
import { MovieService } from '@core/services/movie/movie.service';
import { ScreeningsService } from '@core/services/schedule/screenings.service';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-schedule',
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent implements OnInit {
	@HostBinding() class = 'app-schedule';

	moviesWithScreenings$: Observable<MovieWithScreenings[]>;

	constructor(private movieService: MovieService, private screeningsService: ScreeningsService) {}

	ngOnInit() {
		this.moviesWithScreenings$ = forkJoin([this.movieService.getMovies(), this.screeningsService.getScreenings()]).pipe(
			map((params: [MovieShort[], Screening[]]) => {
				const [movies, screenings] = params;

				return movies.map((movie) => {
					return {
						movie,
						screenings: screenings.filter((s) => s.movieId === movie.id),
					};
				});
			})
		);
	}
}

interface MovieWithScreenings {
	movie: MovieShort;
	screenings: Screening[];
}
