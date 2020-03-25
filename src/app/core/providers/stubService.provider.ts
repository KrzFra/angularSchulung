import { TheaterStubService } from '@core/services/theater/theater-stub.service';
import { TheaterService } from '@core/services/theater/theater.service';
import { ReservationStubService } from '@core/services/reservation/reservation-stub.service';
import { ReservationService } from '@core/services/reservation/reservation.service';
import { ScheduleStubService } from '@core/services/schedule/schedule-stub.service';
import { ScheduleService } from '@core/services/schedule/schedule.service';
import { MovieStubService } from '@core/services/movie/movie-stub.service';
import { MovieService } from '@core/services/movie/movie.service';
import { Provider } from '@angular/core';
import { environment } from 'src/environments/environment';

const stubServices: Provider[] = [
	{
		provide: MovieService,
		useClass: MovieStubService,
	},
	{
		provide: ScheduleService,
		useClass: ScheduleStubService,
	},
	{
		provide: ReservationService,
		useClass: ReservationStubService,
	},
	{
		provide: TheaterService,
		useClass: TheaterStubService,
	},
];

export const stubServiceProviders: Provider[] = environment.useStubServices ? stubServices : [];
