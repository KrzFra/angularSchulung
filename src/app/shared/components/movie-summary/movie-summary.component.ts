import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { MovieLong } from '@core/interfaces/movie.interface';

@Component({
	selector: 'app-movie-summary',
	templateUrl: './movie-summary.component.html',
	styleUrls: ['./movie-summary.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieSummaryComponent {
	@HostBinding() class = 'app-movie-summary';

	@Input() movie: MovieLong;
	@Input() showDescription = false;
	@Input() inline = false;
}
