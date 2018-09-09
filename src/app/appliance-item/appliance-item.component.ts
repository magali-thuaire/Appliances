import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-appliance-item',
	templateUrl: './appliance-item.component.html',
	styleUrls: ['./appliance-item.component.scss']
})
export class ApplianceItemComponent {

	@Input() appliance: string;
	@Input() status: string;

	// Fonction qui récupère le statut des appareils
	getStatus() {
		return this.status;
	}

	// Fonction qui retourne une couleur en fonction du statut de l'appareil
	getColor() {
		// Si appareil allumé -> couleur verte
		if (this.status === 'allumé') {
			return 'green';
		// Si appareil éteint -> couleur rouge
		} else if (this.status === 'éteint') {
			return 'red';
		}
	}
}
