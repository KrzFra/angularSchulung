import { MovieShort } from '@core/interfaces/movie.interface';
import { Component, OnInit, Input, Host, HostBinding } from '@angular/core';

@Component({
	selector: 'app-movie-summary',
	templateUrl: './movie-summary.component.html',
	styleUrls: ['./movie-summary.component.scss'],
})
export class MovieSummaryComponent {
	@HostBinding() class = 'app-movie-summary';

	@Input() movie: MovieShort;
}
