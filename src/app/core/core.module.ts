import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

@NgModule({
	declarations: [MainMenuComponent],
	imports: [CommonModule, RouterModule],
	exports: [MainMenuComponent],
})
export class CoreModule {}
