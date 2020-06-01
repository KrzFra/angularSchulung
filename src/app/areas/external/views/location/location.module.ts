import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';

@NgModule({
	declarations: [LocationComponent],
	imports: [CoreModule, CommonModule, SharedModule, LocationRoutingModule],
})
export class LocationModule {}
