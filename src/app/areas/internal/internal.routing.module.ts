import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservedSeatsComponent } from './views/reserved-seats/reserved-seats.component';

const routes: Routes = [
	{
		path: 'reserved-seats',
		component: ReservedSeatsComponent,
	},
	{
		path: '**',
		redirectTo: 'reserved-seats',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class InternalRoutingModule {}
