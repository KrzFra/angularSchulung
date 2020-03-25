import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { SharedModule } from './../../shared/shared.module';
import { InternalRoutingModule } from './internal-routing.module';
import { ReservedSeatsComponent } from './views/reserved-seats/reserved-seats.component';

@NgModule({
	declarations: [ReservedSeatsComponent],
	imports: [CommonModule, CoreModule, InternalRoutingModule, SharedModule],
})
export class InternalModule {}
