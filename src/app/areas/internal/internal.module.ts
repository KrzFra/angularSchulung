import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InternalRoutingModule } from './internal-routing.module';
import { ReservedSeatsComponent } from './views/reserved-seats/reserved-seats.component';

@NgModule({
	declarations: [ReservedSeatsComponent],
	imports: [CommonModule, InternalRoutingModule],
})
export class InternalModule {}
