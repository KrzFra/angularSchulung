import { ReservedSeatsComponent } from './views/reserved-seats/reserved-seats.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'select-seats',
		component: ReservedSeatsComponent,
	},
	{
		path: '',
		component: ScheduleComponent,
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
