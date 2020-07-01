import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { stubServiceProviders } from './core/providers/stubService.provider';
import { AppFooterModule } from './shared/components/footer/footer.module';
import { AppHeaderModule } from './shared/components/header/header.module';

@NgModule({
	declarations: [AppComponent],
	imports: [AppFooterModule, AppHeaderModule, AppRoutingModule, BrowserModule, HttpClientModule],
	providers: [...stubServiceProviders],
	bootstrap: [AppComponent],
})
export class AppModule {}
