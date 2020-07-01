import { NgModule } from '@angular/core';
import { ToLetterPipe } from './to-letter.pipe';

@NgModule({
	declarations: [ToLetterPipe],
	exports: [ToLetterPipe],
})
export class AppToLetterModule {}
