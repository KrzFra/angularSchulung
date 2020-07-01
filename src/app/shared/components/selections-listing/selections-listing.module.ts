import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppToLetterModule } from './../../pipes/to-letter/to-letter.module';
import { SelectionsListingComponent } from './selections-listing.component';

@NgModule({
	declarations: [SelectionsListingComponent],
	imports: [AppToLetterModule, CommonModule],
	exports: [SelectionsListingComponent],
})
export class AppSelectionsListingModule {}
