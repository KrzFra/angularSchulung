import { Component, HostBinding, Input, ChangeDetectionStrategy } from '@angular/core';
import { MovieShort } from '@core/interfaces/movie.interface';

@Component({
	selector: 'app-movie-summary',
	templateUrl: './movie-summary.component.html',
	styleUrls: ['./movie-summary.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieSummaryComponent {
	@HostBinding() class = 'app-movie-summary';

	@Input() movie: MovieShort;
}
