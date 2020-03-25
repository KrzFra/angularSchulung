import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MovieShort } from '@core/interfaces/movie.interface';
import { Schedules } from '@core/interfaces/schedule.interface';
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
	schedules: Schedules;

	subscriptions: Subscription[] = [];

	constructor(private movieService: MovieService, private scheduleService: ScheduleService) {}

	ngOnInit() {
		this.movies$ = this.movieService.getMovies();

		this.subscriptions.push(
			this.scheduleService.getSchedules().subscribe((schedules: Schedules) => {
				this.schedules = schedules;
			})
		);
	}

	ngOnDestroy() {
		this.subscriptions.forEach(s => s.unsubscribe());
	}
}
