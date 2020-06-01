import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MakeReservationRoutingModule } from './make-reservation-routing.module';
import { MakeReservationComponent } from './make-reservation.component';

@NgModule({
	declarations: [MakeReservationComponent],
	imports: [CommonModule, MakeReservationRoutingModule],
})
export class MakeReservationModule {}
