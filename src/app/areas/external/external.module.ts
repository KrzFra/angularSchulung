import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { MovieSummaryLongComponent } from './../../shared/components/movie-summary-long/movie-summary-long.component';
import { SharedModule } from './../../shared/shared.module';
import { ExternalRoutingModule } from './external-routing.module';
import { LocationComponent } from './views/location/location.component';
import { LoginComponent } from './views/login/login.component';
import { MakeReservationComponent } from './views/make-reservation/make-reservation.component';
import { MovieScheduleOverviewComponent } from './views/schedule/components/movie-schedule-overview/movie-schedule-overview.component';
import { MovieScheduleComponent } from './views/schedule/components/movie-schedule/movie-schedule.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { SeatSelectionSummaryComponent } from './views/seat-selection/components/seat-selection-summary/seat-selection-summary.component';
import { SeatComponent } from './views/seat-selection/components/seat-selector/components/seat/seat.component';
import { SeatSelectorComponent } from './views/seat-selection/components/seat-selector/seat-selector.component';
import { SeatSelectionComponent } from './views/seat-selection/seat-selection.component';

@NgModule({
	declarations: [
		LocationComponent,
		LoginComponent,
		MakeReservationComponent,
		MovieScheduleComponent,
		MovieScheduleOverviewComponent,
		ScheduleComponent,
		SeatComponent,
		SeatSelectionComponent,
		SeatSelectionSummaryComponent,
		SeatSelectorComponent,
	],
	imports: [CoreModule, CommonModule, ExternalRoutingModule, SharedModule],
})
export class ExternalModule {}
