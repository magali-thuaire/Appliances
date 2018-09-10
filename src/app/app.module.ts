import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApplianceItemComponent } from './appliance-item/appliance-item.component';
import { ApplianceService } from './services/appliance.service';

@NgModule({
	declarations: [
		AppComponent,
		ApplianceItemComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [
		ApplianceService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
