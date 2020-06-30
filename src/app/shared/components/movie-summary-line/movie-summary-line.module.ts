import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieSummaryLineComponent } from './movie-summary-line.component';

@NgModule({
	declarations: [MovieSummaryLineComponent],
	imports: [CommonModule],
	exports: [MovieSummaryLineComponent],
})
export class AppMovieSummaryLineModule {}
