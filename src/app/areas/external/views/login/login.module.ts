import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppLoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';

@NgModule({
	declarations: [LoginComponent],
	imports: [CommonModule, AppLoginRoutingModule],
})
export class AppLoginModule {}
