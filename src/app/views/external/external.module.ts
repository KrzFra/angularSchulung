import { ExternalRoutingModule } from './external-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection.component';
import { MakeReservationComponent } from './components/make-reservation/make-reservation.component';
import { LocationComponent } from './components/location/location.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
	declarations: [ScheduleComponent, SeatSelectionComponent, MakeReservationComponent, LocationComponent, LoginComponent],
	imports: [CommonModule, ExternalRoutingModule],
	bootstrap: [ScheduleComponent],
})
export class ExternalModule {}
