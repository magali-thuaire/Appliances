import { Component, Input } from '@angular/core';
import { ApplianceService } from '../../services/appliance.service';

@Component({
	selector: 'app-appliance-item',
	templateUrl: './appliance-item.component.html',
	styleUrls: ['./appliance-item.component.scss']
})
export class ApplianceItemComponent {

	// Injection du service ApplianceService
	constructor(private applianceService: ApplianceService) {}

	@Input() appliance: string;
	@Input() status: string;
	@Input() indexOfAppliance: number;
	@Input() id: number;

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

	// Fonction qui modifie le statut d'un appareil sur 'allumé'
	onTurningOn() {
		this.applianceService.turningOnOne(this.indexOfAppliance);
	}

	// Fonction qui modifie le statut d'un appareil sur 'éteint'
	onTurningOff() {
		this.applianceService.turningOffOne(this.indexOfAppliance);
	}
}
