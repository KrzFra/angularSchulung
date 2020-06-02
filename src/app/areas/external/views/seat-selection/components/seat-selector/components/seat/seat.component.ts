import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
	selector: 'app-seat',
	templateUrl: './seat.component.html',
	styleUrls: ['./seat.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeatComponent {
	@HostBinding() class = 'app-seat';
	@Input() isReserved = false;
	@Input() isSelected = false;
	@Input() isUnchangeable = false;
}
