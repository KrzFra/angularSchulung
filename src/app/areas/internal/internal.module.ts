import { InternalRoutingModule } from './internal-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservedSeatsComponent } from './views/reserved-seats/reserved-seats.component';

@NgModule({
	declarations: [ReservedSeatsComponent],
	imports: [CommonModule, InternalRoutingModule],
})
export class InternalModule {}
