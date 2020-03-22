import { MovieSummaryComponent } from './components/movie-summary/movie-summary.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [MainMenuComponent, MovieSummaryComponent],
	imports: [CommonModule],
	exports: [MainMenuComponent, MovieSummaryComponent],
})
export class SharedModule {}
