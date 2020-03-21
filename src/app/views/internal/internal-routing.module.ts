import { ReservedSeatsComponent } from './components/reserved-seats/reserved-seats.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
