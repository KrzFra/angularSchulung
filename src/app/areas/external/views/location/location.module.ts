import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppLocationRoutingModule } from './location.routing.module';
import { LocationComponent } from './location.component';

@NgModule({
	declarations: [LocationComponent],
	imports: [CommonModule, AppLocationRoutingModule],
})
export class AppLocationModule {}
