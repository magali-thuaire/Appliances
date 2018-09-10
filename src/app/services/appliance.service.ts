export class ApplianceService {

	constructor() { }

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

	// Fonction qui modifie le statut de tous les appareils sur 'éteint'
	turningOnAll() {
		for (const appliance of this.appliances) {
			appliance.status = 'allumé';
		}
	}

	// Fonction qui modifie le statut de tous les appareils sur 'allumé'
	turningOffAll() {
		for (const appliance of this.appliances) {
			appliance.status = 'éteint';
		}
	}

}
