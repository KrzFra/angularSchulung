import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-reserved-seats',
	templateUrl: './reserved-seats.component.html',
	styleUrls: ['./reserved-seats.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservedSeatsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
