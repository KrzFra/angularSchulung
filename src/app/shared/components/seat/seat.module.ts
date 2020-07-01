import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SeatComponent } from './seat.component';

@NgModule({
	declarations: [SeatComponent],
	imports: [CommonModule],
	exports: [SeatComponent],
})
export class AppSeatModule {}
