import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { SeatSelectionComponent } from './views/seat-selection/seat-selection.component';
import { MakeReservationComponent } from './views/make-reservation/make-reservation.component';
import { LocationComponent } from './views/location/location.component';
import { LoginComponent } from './views/login/login.component';
import { ReservedSeatsComponent } from './views/reserved-seats/reserved-seats.component';

@NgModule({
	declarations: [
		AppComponent,
		ScheduleComponent,
		SeatSelectionComponent,
		MakeReservationComponent,
		LocationComponent,
		LoginComponent,
		ReservedSeatsComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
