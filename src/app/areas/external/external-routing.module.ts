import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './views/location/location.component';
import { SeatSelectionComponent } from './views/seat-selection/seat-selection.component';

const routes: Routes = [
	{
		path: 'schedule',
		loadChildren: () => import('./views/schedule/schedule.module').then((m) => m.ScheduleModule),
	},
	{
		path: 'seat-selection',
		component: SeatSelectionComponent,
	},
	{
		path: 'make-reservation',
		loadChildren: () => import('./views/make-reservation/make-reservation.module').then((m) => m.MakeReservationModule),
	},
	{
		path: 'location',
		component: LocationComponent,
	},
	{
		path: 'login',
		loadChildren: () => import('./views/login/login.module').then((m) => m.LoginModule),
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
