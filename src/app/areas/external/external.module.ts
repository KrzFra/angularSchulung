import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ExternalRoutingModule } from './external-routing.module';
import { LocationComponent } from './views/location/location.component';
import { SeatSelectionSummaryComponent } from './views/seat-selection/components/seat-selection-summary/seat-selection-summary.component';
import { SeatComponent } from './views/seat-selection/components/seat-selector/components/seat/seat.component';
import { SeatSelectorComponent } from './views/seat-selection/components/seat-selector/seat-selector.component';
import { SeatSelectionComponent } from './views/seat-selection/seat-selection.component';

@NgModule({
	declarations: [
		LocationComponent,
		SeatComponent,
		SeatSelectionComponent,
		SeatSelectionSummaryComponent,
		SeatSelectorComponent,
	],
	imports: [CoreModule, CommonModule, ExternalRoutingModule, SharedModule],
})
export class ExternalModule {}
