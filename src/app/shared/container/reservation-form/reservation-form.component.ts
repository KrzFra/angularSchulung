import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { onSubmit_reservationForm } from '@core/events/onSubmit_reservationForm';

@Component({
	selector: 'app-reservation-form',
	templateUrl: './reservation-form.component.html',
	styleUrls: ['./reservation-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationFormComponent {
	formGroup = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		email: new FormControl('', [Validators.email, Validators.required]),
	});

	@Output() formSubmit = new EventEmitter<onSubmit_reservationForm>();

	onSubmit_form() {
		if (this.formGroup.valid) {
			this.formSubmit.next({
				firstName: this.formGroup.get('firstName').value,
				lastName: this.formGroup.get('lastName').value,
				email: this.formGroup.get('email').value,
			});
		}
	}
}
