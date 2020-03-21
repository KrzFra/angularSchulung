import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './views/location/location.component';
import { LoginComponent } from './views/login/login.component';
import { MakeReservationComponent } from './views/make-reservation/make-reservation.component';
import { ReservedSeatsComponent } from './views/reserved-seats/reserved-seats.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { SeatSelectionComponent } from './views/seat-selection/seat-selection.component';

@NgModule({
	declarations: [
		AppComponent,
		LocationComponent,
		LoginComponent,
		MakeReservationComponent,
		ReservedSeatsComponent,
		ScheduleComponent,
		SeatSelectionComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
