import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './views/location/location.component';
import { LoginComponent } from './views/login/login.component';
import { MakeReservationComponent } from './views/make-reservation/make-reservation.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { SeatSelectionComponent } from './views/seat-selection/seat-selection.component';

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
