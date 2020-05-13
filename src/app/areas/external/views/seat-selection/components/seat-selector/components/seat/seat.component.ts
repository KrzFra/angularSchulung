import {
	Component,
	OnInit,
	HostBinding,
	ChangeDetectionStrategy,
	Input,
	HostListener,
	Output,
	EventEmitter,
} from '@angular/core';

@Component({
	selector: 'app-seat',
	templateUrl: './seat.component.html',
	styleUrls: ['./seat.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeatComponent implements OnInit {
	@HostBinding() class = 'app-seat';
	@Input() isReserved = false;
	@Input() isSelected = false;

	@Output() selectionChanged = new EventEmitter<boolean>();

	@HostListener('click') onClick() {
		if (this.isReserved) {
			return;
		}

		this.isSelected = !this.isSelected;
		this.selectionChanged.next(this.isSelected);
	}

	constructor() {}

	ngOnInit(): void {}
}
