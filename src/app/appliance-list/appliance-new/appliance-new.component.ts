import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-appliance-new',
	templateUrl: './appliance-new.component.html',
	styleUrls: ['./appliance-new.component.scss']
})
export class ApplianceNewComponent {

	// Statut par défaut du nouvel appareil dans le formulaire
	defaultStatus = 'éteint';

	constructor() { }

	// Fonction qui soumet le formulaire
	onSubmit(form: NgForm) {
		console.log(form.value);
	}
}
