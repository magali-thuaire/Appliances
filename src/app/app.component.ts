import { Component, OnInit } from '@angular/core';
import { ApplianceService } from './services/appliance.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	// Authentification de l'utilisateur
	isAuth = false;

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

	// Tableau des appareils
	appliances: any[];

	// Injection du service ApplianceService
	constructor(private applianceService: ApplianceService) {
		// Fonction qui permet de simuler l'authentification de l'utilisateur après 4s
		setTimeout(
			() => {
				this.isAuth = true;
			},
			4000);
	}

	ngOnInit() {
		// Initialisation du tableau des appareils
		this.appliances = this.applianceService.appliances;
	}

	// Fonction qui modifie le statut des appareils sur 'allumé'
	onTurningOn() {
		console.log('on allume tout');
	}

}
