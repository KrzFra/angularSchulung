import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'internal',
		loadChildren: () => import('./views/internal/internal.module').then(m => m.InternalModule),
	},
	{
		path: '',
		loadChildren: () => import('./views/external/external.module').then(m => m.ExternalModule),
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
