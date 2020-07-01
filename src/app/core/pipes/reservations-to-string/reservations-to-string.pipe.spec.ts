import { ReservationsToStringPipe } from './reservations-to-string.pipe';

describe('SelectionsToStringPipe', () => {
	it('create an instance', () => {
		const pipe = new ReservationsToStringPipe();
		expect(pipe).toBeTruthy();
	});
});
