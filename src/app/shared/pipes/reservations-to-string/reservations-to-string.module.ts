import { NgModule } from '@angular/core';
import { ReservationsToStringPipe } from './reservations-to-string.pipe';

@NgModule({
	declarations: [ReservationsToStringPipe],
	exports: [ReservationsToStringPipe],
})
export class AppReservationsToStringModule {}
