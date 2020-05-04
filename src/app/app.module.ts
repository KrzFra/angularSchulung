import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { stubServiceProviders } from './core/providers/stubService.provider';

@NgModule({
	declarations: [AppComponent],
	imports: [AppRoutingModule, BrowserModule, CoreModule, HttpClientModule, RouterModule],
	providers: [...stubServiceProviders],
	bootstrap: [AppComponent],
})
export class AppModule {}
