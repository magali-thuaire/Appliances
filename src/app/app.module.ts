import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApplianceItemComponent } from './appliance-list/appliance-item/appliance-item.component';
import { ApplianceService } from './services/appliance.service';
import { ApplianceListComponent } from './appliance-list/appliance-list.component';
import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from "./services/auth.service";

const appRoutes: Routes = [
	{ path: 'appareils', component: ApplianceListComponent },
	{ path: 'auth', component: AuthComponent },
	{ path: '', component: ApplianceListComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		ApplianceItemComponent,
		ApplianceListComponent,
		AuthComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [
		ApplianceService,
		AuthService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
