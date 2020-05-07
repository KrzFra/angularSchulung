import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
	selector: 'app-make-reservation',
	templateUrl: './make-reservation.component.html',
	styleUrls: ['./make-reservation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MakeReservationComponent implements OnInit {
	@HostBinding() class = 'app-make-reservation';

	constructor() {}

	ngOnInit(): void {}
}
