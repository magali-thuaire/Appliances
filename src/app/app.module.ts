import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplianceItemComponent } from './appliance-item/appliance-item.component';

@NgModule({
	declarations: [
		AppComponent,
		ApplianceItemComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
