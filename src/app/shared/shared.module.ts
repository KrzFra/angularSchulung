import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@core/core.module';
import { MovieSummaryComponent } from './components/movie-summary/movie-summary.component';

@NgModule({
	declarations: [MovieSummaryComponent],
	imports: [CoreModule, CommonModule, RouterModule],
	exports: [MovieSummaryComponent],
})
export class SharedModule {}
