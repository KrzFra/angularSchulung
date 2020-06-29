import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'internal',
		loadChildren: () => import('./areas/internal/internal.module').then((m) => m.AppInternalModule),
	},
	{
		path: '',
		loadChildren: () => import('./areas/external/external.module').then((m) => m.AppExternalModule),
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
