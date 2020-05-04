import { Screening } from '@core/interfaces/schedule.interface';
import { ChangeDetectionStrategy, Component, Input, OnInit, HostBinding } from '@angular/core';
import * as moment from 'moment';

interface ScheduleByDay {
	dateLabel: string;
	date: string;
	times: number[];
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

		this.schedulesByDay = this.generateSchedulesByDay(this.screenings);
	}

	@Input() movieId: string;

	schedulesByDay: ScheduleByDay[];

	generateSchedulesByDay(screenings: Screening[]): ScheduleByDay[] {
		const screeningsByDay: ScheduleByDay[] = [];

		for (let i = 0; i < 7; i++) {
			const evaluatedDay = moment().startOf('day').add(i, 'days');

			const times: number[] = [];

			for (const screening of screenings) {
				const screeningTime = moment(screening.time);

				if (evaluatedDay.date() === screeningTime.date()) {
					times.push(screening.time);
				}
			}

			screeningsByDay[i] = {
				dateLabel: this.generateDateLabel(evaluatedDay),
				date: evaluatedDay.format('DD.MM'),
				times,
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
