import { TheaterStubService } from './../services/theater-stub.service';
import { TheaterService } from './../services/theater.service';
import { ReservationStubService } from './../services/reservation-stub.service';
import { ReservationService } from './../services/reservation.service';
import { ScheduleStubService } from './../services/schedule-stub.service';
import { ScheduleService } from './../services/schedule.service';
import { MovieStubService } from '../services/movie-stub.service';
import { MovieService } from '../services/movie.service';
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
