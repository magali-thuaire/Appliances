import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	// Authentification de l'utilisateur
	isAuth = false;

	// Date de mise à jour
	lastUpdate = new Date();

	// Tableau des appareils
	appliances = [
		{
			name: 'Machine à laver',
			status: 'éteint'
		},
		{
			name: 'Ordinateur',
			status: 'allumé'
		},
		{
			name: 'Télévision',
			status: 'éteint'
		}
	];

	constructor() {
		// Fonction qui permet de simuler l'authentification de l'utilisateur après 4s
		setTimeout(
			() => {
				this.isAuth = true;
			},
			4000);
	}

	// Fonction qui modifie le statut des appareils sur 'allumé'
	onTurningOn() {
		console.log('on allume tout');
	}

}
