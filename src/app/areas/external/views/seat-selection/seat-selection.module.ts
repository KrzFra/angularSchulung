import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMovieSummaryModule } from '@shared/components/movie-summary/movie-summary.module';
import { SeatSelectionSummaryComponent } from './components/seat-selection-summary/seat-selection-summary.component';
import { SeatComponent } from './components/seat-selector/components/seat/seat.component';
import { SeatSelectorComponent } from './components/seat-selector/seat-selector.component';
import { SeatSelectionRoutingModule } from './seat-selection-routing.module';
import { SeatSelectionComponent } from './seat-selection.component';

@NgModule({
	declarations: [SeatComponent, SeatSelectionComponent, SeatSelectorComponent, SeatSelectionSummaryComponent],
	imports: [AppMovieSummaryModule, CommonModule, SeatSelectionRoutingModule],
})
export class SeatSelectionModule {}
