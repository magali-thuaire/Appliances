import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()

export class ApplianceService {

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

	constructor(private httpClient: HttpClient) {

	}

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

	// Fonction qui permet d'ajouter un nouvel appareil
	addAppliance(name: string, status: string) {
		// Création d'un object appareil vide
		const applianceObject = {
			id: 0,
			name:  '',
			status:  ''
		};
		// Attribution des données du nouvel appareil créé
		applianceObject.name = name;
		applianceObject.status = status;
		applianceObject.id = this.appliances[this.appliances.length - 1].id - 1;
		// Ajout du nouvel appareil dans le tableau des appareils
		this.appliances.push(applianceObject);
		this.emitApplianceSubject();
	}

	// Fonction qui enregistre la liste des appareils sur le serveur
	saveAppliancesToServer() {
		this.httpClient
			.put('https://appliances-526e9.firebaseio.com/appliances.json', this.appliances)
			.subscribe(
				() => {
					console.log('Enregistrement terminé');
				},
				(error)=> {
					console.log('Erreur d\'enregistrement' + error);
				}
			)
		;
	}

}
