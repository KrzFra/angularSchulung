import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ExternalRoutingModule } from './external-routing.module';

@NgModule({
	imports: [CoreModule, CommonModule, ExternalRoutingModule, SharedModule],
})
export class ExternalModule {}
