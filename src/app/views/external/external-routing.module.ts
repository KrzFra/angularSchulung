import { LoginComponent } from './components/login/login.component';
import { LocationComponent } from './components/location/location.component';
import { MakeReservationComponent } from './components/make-reservation/make-reservation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection.component';

const routes: Routes = [
	{
		path: 'schedule',
		component: ScheduleComponent,
	},
	{
		path: 'seat-selection',
		component: SeatSelectionComponent,
	},
	{
		path: 'make-reservation',
		component: MakeReservationComponent,
	},
	{
		path: 'location',
		component: LocationComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: '**',
		redirectTo: 'schedule',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ExternalRoutingModule {}
