import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { LocationComponent } from './components/location/location.component';
import { LoginComponent } from './components/login/login.component';
import { MakeReservationComponent } from './components/make-reservation/make-reservation.component';
import { MovieScheduleOverviewComponent } from './components/schedule/components/movie-schedule-overview/movie-schedule-overview.component';
import { MovieScheduleComponent } from './components/schedule/components/movie-schedule/movie-schedule.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection.component';
import { ExternalRoutingModule } from './external-routing.module';

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
