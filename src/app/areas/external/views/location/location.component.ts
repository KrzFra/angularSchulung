import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
	@HostBinding() class = 'app-location';
}
