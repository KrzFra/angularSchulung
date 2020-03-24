export interface ScheduleEntry {
	time: number;
	theater: string;
}

export type Schedule = ScheduleEntry[];

export type Schedules = Record<string, Schedule>;
