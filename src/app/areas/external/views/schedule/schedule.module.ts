import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMovieCardModule } from '@shared/components/movie-card/movie-card.module';
import { AppMovieSummaryLineModule } from '@shared/components/movie-summary-line/movie-summary-line.module';
import { AppWeeklyScreeningsModule } from '@shared/components/weekly-screenings/weekly-screenings.module';
import { AppScheduleRoutingModule } from './schedule.routing.module';
import { ScheduleComponent } from './schedule.component';

@NgModule({
	declarations: [ScheduleComponent],
	imports: [
		AppMovieCardModule,
		AppMovieSummaryLineModule,
		AppScheduleRoutingModule,
		AppWeeklyScreeningsModule,
		CommonModule,
	],
})
export class AppScheduleModule {}
