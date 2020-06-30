import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeeklyScreeningsComponent } from './weekly-screenings.component';

@NgModule({
	declarations: [WeeklyScreeningsComponent],
	imports: [CommonModule, RouterModule],
	exports: [WeeklyScreeningsComponent],
})
export class AppWeeklyScreeningsModule {}
