import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';

import { ApplianceListComponent } from './appliance-list/appliance-list.component';
import { ApplianceItemComponent } from './appliance-list/appliance-item/appliance-item.component';
import { ApplianceSingleComponent } from './appliance-list/appliance-single/appliance-single.component';
import { ApplianceService } from './services/appliance.service';

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
	{ path: 'auth', component: AuthComponent },
	{ path: 'appareils', component: ApplianceListComponent },
	{ path: 'appareils/:id', component: ApplianceSingleComponent },
	{ path: '', component: ApplianceListComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		AuthComponent,
		ApplianceListComponent,
		ApplianceItemComponent,
		ApplianceSingleComponent
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
