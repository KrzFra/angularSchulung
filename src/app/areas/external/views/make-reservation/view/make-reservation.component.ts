import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-make-reservation',
	templateUrl: './make-reservation.component.html',
	styleUrls: ['./make-reservation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MakeReservationComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
