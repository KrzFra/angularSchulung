import { SeatSelectionComponent } from './views/seat-selection/seat-selection.component';
import { ReservedSeatsComponent } from './views/reserved-seats/reserved-seats.component';
import { LoginComponent } from './views/login/login.component';
import { LocationComponent } from './views/location/location.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ScheduleComponent,
	},
	{
		path: 'schedule',
		component: ScheduleComponent,
	},
	{
		path: 'seat-selection',
		component: SeatSelectionComponent,
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
		path: 'reserved-seats',
		component: ReservedSeatsComponent,
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
