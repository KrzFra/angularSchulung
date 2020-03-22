import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { stubServiceProviders } from './core/providers/stubService.provider';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule],
	providers: [...stubServiceProviders],
	bootstrap: [AppComponent],
})
export class AppModule {}
