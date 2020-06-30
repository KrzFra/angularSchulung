import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionsComponent } from './selections.component';

const routes: Routes = [
	{
		path: '',
		component: SelectionsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AppSelectionsRoutingModule {}
