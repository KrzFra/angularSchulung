import { ChangeDetectionStrategy, Component, OnInit, HostBinding } from '@angular/core';

@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent implements OnInit {
	@HostBinding() class = 'app-location';

	constructor() {}

	ngOnInit(): void {}
}
