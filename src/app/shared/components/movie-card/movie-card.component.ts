import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { MovieShort } from '@core/interfaces/movie.interface';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent {
	@HostBinding() class = 'app-movie-card';

	@Input() movie: MovieShort;
}
