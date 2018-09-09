import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	// Liste des appareils
	applianceOne = 'Machine à laver';
	applianceTwo = 'Ordinateur';
	applianceThree = 'Télévision';
}
