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

import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
	{ path: 'auth', component: AuthComponent },
	{ path: 'appareils', canActivate: [AuthGuard], component: ApplianceListComponent },
	{ path: 'appareils/:id', canActivate: [AuthGuard], component: ApplianceSingleComponent },
	{ path: '', canActivate: [AuthGuard], component: ApplianceListComponent },
	{ path: 'not-found', component: FourOhFourComponent },
	{ path: '**', redirectTo: 'not-found' }
];

@NgModule({
	declarations: [
		AppComponent,
		AuthComponent,
		ApplianceListComponent,
		ApplianceItemComponent,
		ApplianceSingleComponent,
		FourOhFourComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [
		ApplianceService,
		AuthService,
		AuthGuard
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }
