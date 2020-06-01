import { CommonModule } from '@angular/common';
import { MovieSummaryComponent } from './movie-summary.component';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [MovieSummaryComponent],
	imports: [CommonModule],
	exports: [MovieSummaryComponent],
})
export class AppMovieSummaryModule {}
