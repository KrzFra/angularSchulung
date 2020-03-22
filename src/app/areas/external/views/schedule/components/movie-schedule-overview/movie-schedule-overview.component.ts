import { Schedule } from '@core/interfaces/schedule.interface';
import { MovieShort } from '@core/interfaces/movie.interface';
import { Component, OnInit, HostBinding, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-movie-schedule-overview',
	templateUrl: './movie-schedule-overview.component.html',
	styleUrls: ['./movie-schedule-overview.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieScheduleOverviewComponent implements OnInit {
	@HostBinding() class = 'app-movie-schedule-overview';

	@Input() movie: MovieShort;
	@Input() schedule: Schedule;

	constructor() {}

	ngOnInit(): void {}
}
