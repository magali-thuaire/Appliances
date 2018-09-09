import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	// Authentification de l'utilisateur
	isAuth = false;

	// Liste des appareils
	applianceOne = 'Machine à laver';
	applianceTwo = 'Ordinateur';
	applianceThree = 'Télévision';

	// Statut des appareils
	status = 'éteint';

	constructor() {
		// Fonction qui permet de simuler l'authentification de l'utilisateur après 4s
		setTimeout(
			() => {
				this.isAuth = true;
			},
		4000);
	}

	// Fonction qui récupère le statut des appareils
	getStatus() {
		return this.status;
	}

}
