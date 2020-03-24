import { MovieLong } from '@core/interfaces/movie.interface';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-movie-summary-long',
	templateUrl: './movie-summary-long.component.html',
	styleUrls: ['./movie-summary-long.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieSummaryLongComponent implements OnInit {
	@Input() movie: MovieLong;

	constructor() {}

	ngOnInit(): void {}
}
