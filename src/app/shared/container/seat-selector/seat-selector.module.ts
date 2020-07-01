import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppSeatModule } from '@shared/components/seat/seat.module';
import { SeatSelectorComponent } from './seat-selector.component';

@NgModule({
	declarations: [SeatSelectorComponent],
	imports: [AppSeatModule, CommonModule],
	exports: [SeatSelectorComponent],
})
export class AppSeatSelectorModule {}
