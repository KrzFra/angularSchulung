import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieSummaryLongComponent } from './components/movie-summary-long/movie-summary-long.component';
import { MovieSummaryComponent } from './components/movie-summary/movie-summary.component';
import { CoreModule } from '@core/core.module';

@NgModule({
	declarations: [MovieSummaryComponent, MovieSummaryLongComponent],
	imports: [CoreModule, CommonModule, RouterModule],
	exports: [MovieSummaryComponent, MovieSummaryLongComponent],
})
export class SharedModule {}
