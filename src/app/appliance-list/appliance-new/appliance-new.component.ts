import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApplianceService } from '../../services/appliance.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-appliance-new',
	templateUrl: './appliance-new.component.html',
	styleUrls: ['./appliance-new.component.scss']
})
export class ApplianceNewComponent {

	// Statut par défaut du nouvel appareil dans le formulaire
	defaultStatus = 'éteint';

	constructor(private applianceService: ApplianceService, private router: Router) { }

	// Fonction qui soumet le formulaire
	onSubmit(form: NgForm) {
		const name = form.value['name'];
		const status = form.value['status'];
		this.applianceService.addAppliance(name, status);
		this.router.navigate(['appareils']);
	}
}
