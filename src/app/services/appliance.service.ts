import { Subject } from 'rxjs';

export class ApplianceService {

	constructor() { }

	// Subject permet d'accéder au tableau des appareils
	applianceSubject = new Subject<any[]>();

	// Tableau des appareils (non accessible depuis l'extérieur la classe)
	private appliances = [
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
			this.emitApplianceSubject();
		}
	}

	// Fonction qui modifie le statut de tous les appareils sur 'éteint'
	turningOffAll() {
		for (const appliance of this.appliances) {
			appliance.status = 'éteint';
			this.emitApplianceSubject();
		}
	}
	// Fonction qui modifie le statut d'un appareil sur 'allumé'
	turningOnOne(index: number) {
		this.appliances[index].status = 'allumé';
		this.emitApplianceSubject();
	}

	// Fonction qui modifie le statut d'un appareil sur 'éteint'
	turningOffOne(index: number) {
		this.appliances[index].status = 'éteint';
		this.emitApplianceSubject();
	}

	// Fonction qui permet d'accéder au tableau des appareils depuis l'extérieur de la classe
	emitApplianceSubject() {
		this.applianceSubject.next(this.appliances.slice());
	}

}
