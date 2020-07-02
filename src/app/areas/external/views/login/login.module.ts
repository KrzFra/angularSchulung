import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AppLoginRoutingModule } from './login.routing.module';

@NgModule({
	declarations: [LoginComponent],
	imports: [AppLoginRoutingModule, CommonModule, ReactiveFormsModule],
})
export class AppLoginModule {}
