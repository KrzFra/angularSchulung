import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, HostBinding } from '@angular/core';
import { MovieShort } from '@core/interfaces/movie.interface';
import { MovieService } from '@core/services/movie/movie.service';
import { ScheduleService } from '@core/services/schedule/schedule.service';
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

	constructor(private movieService: MovieService, private scheduleService: ScheduleService) {}

	ngOnInit() {
		this.movies$ = this.movieService.getMovies();

		this.subscriptions.push(
			this.scheduleService.getSchedules().subscribe((schedules: Screening[]) => {
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
