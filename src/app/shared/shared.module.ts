import { RouterModule } from '@angular/router';
import { MovieSummaryComponent } from './components/movie-summary/movie-summary.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSummaryLongComponent } from './components/movie-summary-long/movie-summary-long.component';

@NgModule({
	declarations: [MainMenuComponent, MovieSummaryComponent, MovieSummaryLongComponent],
	imports: [CommonModule, RouterModule],
	exports: [MainMenuComponent, MovieSummaryComponent, MovieSummaryLongComponent],
})
export class SharedModule {}
