import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./views/schedule/schedule.module').then((m) => m.AppScheduleModule),
	},
	{
		path: 'seat-selection/:screeningId',
		loadChildren: () => import('./views/seat-selection/seat-selection.module').then((m) => m.AppSeatSelectionModule),
	},
	{
		path: 'location',
		loadChildren: () => import('./views/location/location.module').then((m) => m.AppLocationModule),
	},
	{
		path: 'selections',
		loadChildren: () => import('./views/selections/selections.module').then((m) => m.AppSelectionsModule),
	},
	{
		path: 'login',
		loadChildren: () => import('./views/login/login.module').then((m) => m.AppLoginModule),
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
export class AppExternalRoutingModule {}
