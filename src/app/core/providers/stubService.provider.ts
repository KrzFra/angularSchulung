import { Provider } from '@angular/core';
import { MovieStubService } from '@core/services/movie/movie-stub.service';
import { MovieService } from '@core/services/movie/movie.service';
import { ReservationStubService } from '@core/services/reservation/reservation-stub.service';
import { ReservationService } from '@core/services/reservation/reservation.service';
import { ScreeningsStubService } from '@core/services/schedule/screenings-stub.service';
import { environment } from 'src/environments/environment';
import { ScreeningsService } from './../services/schedule/screenings.service';

const stubServices: Provider[] = [
	{
		provide: MovieService,
		useClass: MovieStubService,
	},
	{
		provide: ScreeningsService,
		useClass: ScreeningsStubService,
	},
	{
		provide: ReservationService,
		useClass: ReservationStubService,
	},
];

export const stubServiceProviders: Provider[] = environment.useStubServices ? stubServices : [];
