import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApplianceService } from '../services/appliance.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-appliance-list',
	templateUrl: './appliance-list.component.html',
	styleUrls: ['./appliance-list.component.scss']
})
export class ApplianceListComponent implements OnInit, OnDestroy {

	// Authentification de l'utilisateur
	isAuth = false;

	// Souscription au tableau des appareils
	applianceSubscription: Subscription;

	// Tableau des appareils
	appliances: any[];

	// Date de mise à jour par promesse après 2s
	lastUpdate = new Promise(
		(resolve, reject) => {
			const date = new Date();
			setTimeout(
				() => {
					resolve(date);
				},
				2000);
		}
	);

	// Injection du service ApplianceService
	constructor(private applianceService: ApplianceService) {
		// Fonction qui permet de simuler l'authentification de l'utilisateur après 4s
		setTimeout(
			() => {
				this.isAuth = true;
			},
			4000);
	}

	// Initialisation
	ngOnInit() {
		// Initialisation du tableau des appareils
		this.applianceSubscription = this.applianceService.applianceSubject.subscribe(
			(appliances: any[]) => {
				this.appliances = appliances;
			}
		);
		this.applianceService.emitApplianceSubject();
	}

	// Destruction
	ngOnDestroy() {
		this.applianceSubscription.unsubscribe();
	}

	// Fonction qui modifie le statut des appareils sur 'allumé'
	onTurningOn() {
		this.applianceService.turningOnAll();
	}

	// Fonction qui modifie le statut des appareils sur 'éteint'
	onTurningOff() {
		this.applianceService.turningOffAll();
	}

}
