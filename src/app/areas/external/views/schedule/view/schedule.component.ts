import { ScreeningsService } from './../../../../../core/services/schedule/screenings.service';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, HostBinding } from '@angular/core';
import { MovieShort } from '@core/interfaces/movie.interface';
import { MovieService } from '@core/services/movie/movie.service';
import { Observable, Subscription } from 'rxjs';
import { Screening } from '@core/interfaces/schedule.interface';

@Component({
	selector: 'app-schedule',
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent implements OnInit, OnDestroy {
	@HostBinding() class = 'app-schedule';

	movies$: Observable<MovieShort[]>;
	screeningsByMovie: Record<string, Screening[]> = {};

	subscriptions: Subscription[] = [];

	constructor(private movieService: MovieService, private screeningsService: ScreeningsService) {}

	ngOnInit() {
		this.movies$ = this.movieService.getMovies();

		this.subscriptions.push(
			this.screeningsService.getScreenings().subscribe((schedules: Screening[]) => {
				const schedulesByMovie: Record<string, Screening[]> = {};

				for (const schedule of schedules) {
					const { movie } = schedule;

					if (!(movie in schedulesByMovie)) {
						schedulesByMovie[movie] = [];
					}

					schedulesByMovie[movie].push(schedule);
				}

				this.screeningsByMovie = schedulesByMovie;
			})
		);
	}

	ngOnDestroy() {
		this.subscriptions.forEach((s) => s.unsubscribe());
	}
}
