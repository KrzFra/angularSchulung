import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MovieShort } from '@core/interfaces/movie.interface';
import { Schedule } from '@core/interfaces/schedule.interface';
import { MovieService } from '@core/services/movie/movie.service';
import { ScheduleService } from '@core/services/schedule/schedule.service';
import { Observable, Subscription } from 'rxjs';

@Component({
	selector: 'app-schedule',
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent implements OnInit, OnDestroy {
	movies$: Observable<MovieShort[]>;
	schedulesByMovie: Record<string, Schedule>;

	subscriptions: Subscription[] = [];

	constructor(private movieService: MovieService, private scheduleService: ScheduleService) {}

	ngOnInit() {
		this.movies$ = this.movieService.getMovies();

		this.subscriptions.push(
			this.scheduleService.getSchedules().subscribe((schedules: Schedule) => {
				const schedulesByMovie: Record<string, Schedule> = {};

				for (const schedule of schedules) {
					const { movie } = schedule;

					if (!(movie in schedulesByMovie)) {
						schedulesByMovie[movie] = [];
					}

					schedulesByMovie[movie].push(schedule);
				}

				this.schedulesByMovie = schedulesByMovie;
			})
		);
	}

	ngOnDestroy() {
		this.subscriptions.forEach(s => s.unsubscribe());
	}
}
