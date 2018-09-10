import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApplianceItemComponent } from './appliance-list/appliance-item/appliance-item.component';
import { ApplianceService } from './services/appliance.service';
import { ApplianceListComponent } from './appliance-list/appliance-list.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
	declarations: [
		AppComponent,
		ApplianceItemComponent,
		ApplianceListComponent,
		AuthComponent
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
