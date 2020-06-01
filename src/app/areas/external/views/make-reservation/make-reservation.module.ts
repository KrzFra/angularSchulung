import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { MakeReservationRoutingModule } from './make-reservation-routing.module';
import { MakeReservationComponent } from './make-reservation.component';

@NgModule({
	declarations: [MakeReservationComponent],
	imports: [CoreModule, CommonModule, SharedModule, MakeReservationRoutingModule],
})
export class MakeReservationModule {}
