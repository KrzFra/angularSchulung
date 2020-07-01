import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Screening } from '@core/interfaces/screening.interface';

@Component({
	selector: 'app-selections-summary',
	templateUrl: './selections-summary.component.html',
	styleUrls: ['./selections-summary.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectionsSummaryComponent {
	@Input() screeningsSelections: ScreeningSelections[];
}

interface ScreeningSelections {
	screening: Screening;
	selections: Reservation[];
}
