import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './views/location/location.component';
import { LoginComponent } from './views/login/login.component';
import { MakeReservationComponent } from './views/make-reservation/view/make-reservation.component';
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
