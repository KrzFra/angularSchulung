import { Provider } from '@angular/core';
import { LoginStubService } from '@core/services/login/login-stub.service';
import { LoginService } from '@core/services/login/login.service';
import { MovieStubService } from '@core/services/movie/movie-stub.service';
import { MovieService } from '@core/services/movie/movie.service';
import { ReservationStubService } from '@core/services/reservation/reservation-stub.service';
import { ReservationService } from '@core/services/reservation/reservation.service';
import { ScreeningsStubService } from '@core/services/schedule/screenings-stub.service';
import { ScreeningsService } from '@core/services/schedule/screenings.service';
import { environment } from 'src/environments/environment';

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
	{
		provide: LoginService,
		useClass: LoginStubService,
	},
];

export const stubServiceProviders: Provider[] = environment.useStubServices ? stubServices : [];
