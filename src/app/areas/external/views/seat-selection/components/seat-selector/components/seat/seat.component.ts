import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	HostBinding,
	HostListener,
	Input,
	Output,
	ChangeDetectorRef,
} from '@angular/core';

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

	@Output() selectionChanged = new EventEmitter<boolean>();

	@HostListener('click') onClick() {
		if (this.isReserved || this.isUnchangeable) {
			return;
		}

		this.isSelected = !this.isSelected;
		this.selectionChanged.next(this.isSelected);
	}

	constructor(private changeRef: ChangeDetectorRef) {}

	deselect() {
		if (!this.isUnchangeable && this.isSelected) {
			this.isSelected = false;
			this.changeRef.markForCheck();
		}
	}
}
