import { AppMovieSummaryModule } from '@shared/components/movie-summary/movie-summary.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieScheduleOverviewComponent } from './components/movie-schedule-overview/movie-schedule-overview.component';
import { MovieScheduleComponent } from './components/movie-schedule/movie-schedule.component';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';

@NgModule({
	declarations: [MovieScheduleComponent, MovieScheduleOverviewComponent, ScheduleComponent],
	imports: [AppMovieSummaryModule, CommonModule, ScheduleRoutingModule],
})
export class ScheduleModule {}
