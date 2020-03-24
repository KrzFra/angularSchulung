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
import { SeatSelectorComponent } from './views/seat-selection/components/seat-selector/seat-selector.component';
import { SeatSelectionSummaryComponent } from './views/seat-selection/components/seat-selection-summary/seat-selection-summary.component';
import { SeatComponent } from './views/seat-selection/components/seat-selector/components/seat/seat.component';

@NgModule({
	declarations: [
		ScheduleComponent,
		SeatSelectionComponent,
		MakeReservationComponent,
		LocationComponent,
		LoginComponent,
		MovieScheduleOverviewComponent,
		MovieScheduleComponent,
		SeatSelectorComponent,
		SeatSelectionSummaryComponent,
		SeatComponent,
	],
	imports: [CommonModule, ExternalRoutingModule, SharedModule],
	bootstrap: [ScheduleComponent],
})
export class ExternalModule {}
