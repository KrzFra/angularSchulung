import { ChangeDetectionStrategy, Component, Input, OnInit, HostBinding } from '@angular/core';
import { Schedule } from '@core/interfaces/schedule.interface';
import * as moment from 'moment';

interface ScheduleByDay {
	dateLabel: string;
	date: string;
	times: any[];
}

@Component({
	selector: 'app-movie-schedule',
	templateUrl: './movie-schedule.component.html',
	styleUrls: ['./movie-schedule.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieScheduleComponent {
	@HostBinding() class = 'app-movie-schedule';

	private scheduleLocal: Schedule;
	get schedule(): Schedule {
		return this.scheduleLocal;
	}
	@Input() set schedule(value: Schedule) {
		this.scheduleLocal = value;

		this.schedulesByDay = this.generateSchedulesByDay(this.schedule);
	}

	schedulesByDay: ScheduleByDay[];

	generateSchedulesByDay(schedule: Schedule): ScheduleByDay[] {
		const scheduleByDay: ScheduleByDay[] = [];

		for (let i = 0; i < 7; i++) {
			const date = moment()
				.add(i, 'days')
				.startOf('day');

			const times: any[] = [];

			for (const scheduleDate of schedule) {
				const scheduleMoment = moment(scheduleDate).startOf('day');

				if (date.valueOf() === scheduleMoment.valueOf()) {
					times.push(scheduleMoment.unix() * 1000);
				}
			}

			scheduleByDay[i] = {
				dateLabel: this.generateDateLabel(date),
				date: date.format('DD.MM'),
				times,
			};
		}
		return scheduleByDay;
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
