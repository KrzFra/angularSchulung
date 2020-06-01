import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';

@NgModule({
	declarations: [LocationComponent],
	imports: [CommonModule, LocationRoutingModule],
})
export class LocationModule {}
