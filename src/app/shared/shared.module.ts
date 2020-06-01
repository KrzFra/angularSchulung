import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@core/core.module';
import { MovieSummaryComponent } from './components/movie-summary/movie-summary.component';

@NgModule({
	declarations: [FooterComponent, HeaderComponent, MovieSummaryComponent],
	imports: [CoreModule, CommonModule, RouterModule],
	exports: [FooterComponent, HeaderComponent, MovieSummaryComponent],
})
export class SharedModule {}
