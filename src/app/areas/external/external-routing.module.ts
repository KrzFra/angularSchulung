import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./views/schedule/schedule.module').then((m) => m.ScheduleModule),
	},
	{
		path: 'seat-selection/:screeningId',
		loadChildren: () => import('./views/seat-selection/seat-selection.module').then((m) => m.SeatSelectionModule),
	},
	{
		path: 'make-reservation',
		loadChildren: () => import('./views/make-reservation/make-reservation.module').then((m) => m.MakeReservationModule),
	},
	{
		path: 'location',
		loadChildren: () => import('./views/location/location.module').then((m) => m.LocationModule),
	},
	{
		path: 'login',
		loadChildren: () => import('./views/login/login.module').then((m) => m.LoginModule),
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ExternalRoutingModule {}
