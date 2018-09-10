export class ApplianceService {

	constructor() { }

	// Tableau des appareils
	appliances = [
		{
			id: 1,
			name: 'Machine à laver',
			status: 'éteint'
		},
		{
			id: 2,
			name: 'Ordinateur',
			status: 'allumé'
		},
		{
			id: 3,
			name: 'Télévision',
			status: 'éteint'
		}
	];

	// Fonction qui retourne un appareil via son id
	getApplianceById(id: number) {
		const appliance = this.appliances.find(
			(applianceObject) => {
				return applianceObject.id === id;
			}
		);
		return appliance;
	}

	// Fonction qui modifie le statut de tous les appareils sur 'allumé'
	turningOnAll() {
		for (const appliance of this.appliances) {
			appliance.status = 'allumé';
		}
	}

	// Fonction qui modifie le statut de tous les appareils sur 'éteint'
	turningOffAll() {
		for (const appliance of this.appliances) {
			appliance.status = 'éteint';
		}
	}
	// Fonction qui modifie le statut d'un appareil sur 'allumé'
	turningOnOne(index: number) {
		this.appliances[index].status = 'allumé';
	}

	// Fonction qui modifie le statut d'un appareil sur 'éteint'
	turningOffOne(index: number) {
		this.appliances[index].status = 'éteint';
	}

}
