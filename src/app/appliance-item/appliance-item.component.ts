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
}
