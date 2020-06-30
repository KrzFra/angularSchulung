import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Screening } from '@core/interfaces/screening.interface';
import * as moment from 'moment';

@Component({
	selector: 'app-weekly-screenings',
	templateUrl: './weekly-screenings.component.html',
	styleUrls: ['./weekly-screenings.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeeklyScreeningsComponent implements OnChanges {
	@HostBinding() class = 'app-weekly-screenings';

	@Input() screenings: Screening[];

	screeningsThisWeek: ScreeningsThisDay[];

	ngOnChanges(changes: SimpleChanges) {
		if (changes.screenings && changes.screenings.currentValue) {
			this._onChanges_screenings(changes.screenings.currentValue);
		}
	}

	private _onChanges_screenings(screenings: Screening[]) {
		const screeningsThisWeek: ScreeningsThisDay[] = [];

		for (let i = 0; i < 7; i++) {
			const evaluatedDay = moment().startOf('day').add(i, 'days');

			const screeningsOnThisDay: Screening[] = [];

			for (const screening of screenings) {
				const screeningTime = moment(screening.time);

				if (evaluatedDay.date() === screeningTime.date()) {
					screeningsOnThisDay.push(screening);
				}
			}

			screeningsThisWeek[i] = {
				dateLabel: this._generateDateLabel(evaluatedDay),
				date: evaluatedDay.format('DD.MM'),
				screenings: screeningsOnThisDay,
			};
		}

		this.screeningsThisWeek = screeningsThisWeek;
	}

	private _generateDateLabel(date: moment.Moment): string {
		const today = moment().startOf('day');

		switch (true) {
			case date.date() === today.date():
				return 'Today';
			case date.date() === today.add(1, 'day').date():
				return 'Tomorrow';
			default:
				return date.format('dddd');
		}
	}
}

interface ScreeningsThisDay {
	dateLabel: string;
	date: string;
	screenings: Screening[];
}
