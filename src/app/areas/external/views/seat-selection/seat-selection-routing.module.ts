import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatSelectionComponent } from './view/seat-selection.component';

const routes: Routes = [
	{
		path: '',
		component: SeatSelectionComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SeatSelectionRoutingModule {}
