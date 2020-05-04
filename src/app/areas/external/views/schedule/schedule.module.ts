import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { MovieScheduleOverviewComponent } from './components/movie-schedule-overview/movie-schedule-overview.component';
import { MovieScheduleComponent } from './components/movie-schedule/movie-schedule.component';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './view/schedule.component';

@NgModule({
	declarations: [MovieScheduleComponent, MovieScheduleOverviewComponent, ScheduleComponent],
	imports: [CoreModule, CommonModule, SharedModule, ScheduleRoutingModule],
})
export class ScheduleModule {}
