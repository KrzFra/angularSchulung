import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectionsComponent } from './selections.component';
import { AppSelectionsRoutingModule } from './selections.routing.module';

@NgModule({
	declarations: [SelectionsComponent],
	imports: [AppSelectionsRoutingModule, CommonModule],
})
export class AppSelectionsModule {}
