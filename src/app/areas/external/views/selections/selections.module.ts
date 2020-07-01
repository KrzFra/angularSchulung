import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppReservationsToStringModule } from '@core/pipes/reservations-to-string/reservations-to-string.module';
import { AppMovieCardModule } from '@shared/components/movie-card/movie-card.module';
import { AppSelectionsSummaryModule } from '@shared/components/selections-summary/selections-summary.module';
import { SelectionsComponent } from './selections.component';
import { AppSelectionsRoutingModule } from './selections.routing.module';

@NgModule({
	declarations: [SelectionsComponent],
	imports: [
		AppMovieCardModule,
		AppSelectionsRoutingModule,
		AppReservationsToStringModule,
		AppSelectionsSummaryModule,
		CommonModule,
	],
})
export class AppSelectionsModule {}
