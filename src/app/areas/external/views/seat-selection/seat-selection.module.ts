import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMovieSummaryModule } from '@shared/components/movie-summary/movie-summary.module';
import { AppSelectionsListingModule } from '@shared/components/selections-listing/selections-listing.module';
import { AppSeatSelectorModule } from '@shared/container/seat-selector/seat-selector.module';
import { SeatSelectionComponent } from './seat-selection.component';
import { AppSeatSelectionRoutingModule } from './seat-selection.routing.module';

@NgModule({
	declarations: [SeatSelectionComponent],
	imports: [
		AppMovieSummaryModule,
		AppSeatSelectorModule,
		AppSelectionsListingModule,
		CommonModule,
		AppSeatSelectionRoutingModule,
	],
})
export class AppSeatSelectionModule {}
