import { Pipe, PipeTransform } from '@angular/core';
import { toLetter } from '@core/functions/toLetter.function';

@Pipe({
	name: 'toLetter',
})
export class ToLetterPipe implements PipeTransform {
	transform(value: number): string {
		return toLetter(value);
	}
}
