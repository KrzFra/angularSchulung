import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
	declarations: [MainMenuComponent, HeaderComponent],
	imports: [CommonModule, RouterModule],
	exports: [HeaderComponent],
})
export class CoreModule {}
