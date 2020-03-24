import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-seat',
	templateUrl: './seat.component.html',
	styleUrls: ['./seat.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeatComponent implements OnInit {
	@HostBinding() class = 'app-seat';

	constructor() {}

	ngOnInit(): void {}
}
