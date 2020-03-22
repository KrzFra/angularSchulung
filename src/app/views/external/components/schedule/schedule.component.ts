import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MovieShort } from '@core/interfaces/movie.interface';
import { MovieService } from '@core/services/movie.service';
import { Observable, Subscription } from 'rxjs';

@Component({
	selector: 'app-schedule',
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent implements OnInit {
	movies$: Observable<MovieShort[]>;

	constructor(private movieService: MovieService) {}

	ngOnInit() {
		this.movies$ = this.movieService.getMovies();
	}
}
