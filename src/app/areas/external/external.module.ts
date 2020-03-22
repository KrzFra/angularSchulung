import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { ExternalRoutingModule } from './external-routing.module';
import { LocationComponent } from './views/location/location.component';
import { LoginComponent } from './views/login/login.component';
import { MakeReservationComponent } from './views/make-reservation/make-reservation.component';
import { MovieScheduleOverviewComponent } from './views/schedule/components/movie-schedule-overview/movie-schedule-overview.component';
import { MovieScheduleComponent } from './views/schedule/components/movie-schedule/movie-schedule.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { SeatSelectionComponent } from './views/seat-selection/seat-selection.component';

@NgModule({
	declarations: [
		ScheduleComponent,
		SeatSelectionComponent,
		MakeReservationComponent,
		LocationComponent,
		LoginComponent,
		MovieScheduleOverviewComponent,
		MovieScheduleComponent,
	],
	imports: [CommonModule, ExternalRoutingModule, SharedModule],
	bootstrap: [ScheduleComponent],
})
export class ExternalModule {}
