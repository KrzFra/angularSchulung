import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationFormComponent } from './reservation-form.component';

@NgModule({
	declarations: [ReservationFormComponent],
	imports: [CommonModule, ReactiveFormsModule],
	exports: [ReservationFormComponent],
})
export class AppReservationFormModule {}
