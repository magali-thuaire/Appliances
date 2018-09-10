import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplianceService } from '../../services/appliance.service';

@Component({
	selector: 'app-appliance-single',
	templateUrl: './appliance-single.component.html',
	styleUrls: ['./appliance-single.component.scss']
})
export class ApplianceSingleComponent implements OnInit {

	appliance: string;
	status: string;

	constructor(private applianceService: ApplianceService,
				private route: ActivatedRoute) { }

	ngOnInit() {
		// Récupère l'id dans la l'url
		const id = this.route.snapshot.params['id'];
		// Récupère le nom de l'appareil correspondant
		this.appliance = this.applianceService.getApplianceById(+id).name;
		// Récupère le statut de l'appareil correspondant
		this.status = this.applianceService.getApplianceById(+id).status;
	}

}
