import { Component, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

	secondes: number;
	counterSubscription: Subscription;

	constructor() { }

	// Initialisation
	ngOnInit() {

		// Création d'une observable
		const counter = interval(1000);

		// Observation de l'observable
		this.counterSubscription = counter.subscribe(
			(value: number) => {
				this.secondes = value;
			}
		);
	}

	// Destruction
	ngOnDestroy() {
		this.counterSubscription.unsubscribe();
	}

}
