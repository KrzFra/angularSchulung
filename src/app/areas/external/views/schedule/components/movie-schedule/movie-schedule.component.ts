import { Screening } from '@core/interfaces/screening.interface';
import { ChangeDetectionStrategy, Component, Input, OnInit, HostBinding } from '@angular/core';
import * as moment from 'moment';

interface ScheduleByDay {
	dateLabel: string;
	date: string;
	screenings: Screening[];
}

@Component({
	selector: 'app-movie-schedule',
	templateUrl: './movie-schedule.component.html',
	styleUrls: ['./movie-schedule.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieScheduleComponent {
	@HostBinding() class = 'app-movie-schedule';

	private _screenings: Screening[];
	get screenings(): Screening[] {
		return this._screenings;
	}
	@Input() set screenings(value: Screening[]) {
		this._screenings = value;

		this.screeningsByDay = this.generateScreeningsByDay(this.screenings);
	}

	@Input() movieId: string;

	screeningsByDay: ScheduleByDay[];

	generateScreeningsByDay(screenings: Screening[]): ScheduleByDay[] {
		const screeningsByDay: ScheduleByDay[] = [];

		for (let i = 0; i < 7; i++) {
			const evaluatedDay = moment().startOf('day').add(i, 'days');

			const screeningsOnThisDay: Screening[] = [];

			for (const screening of screenings) {
				const screeningTime = moment(screening.time);

				if (evaluatedDay.date() === screeningTime.date()) {
					screeningsOnThisDay.push(screening);
				}
			}

			screeningsByDay[i] = {
				dateLabel: this.generateDateLabel(evaluatedDay),
				date: evaluatedDay.format('DD.MM'),
				screenings: screeningsOnThisDay,
			};
		}
		return screeningsByDay;
	}

	generateDateLabel(date: moment.Moment): string {
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
