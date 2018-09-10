import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

	// Etat de l'authentification
	authStatus: boolean;

	constructor(private authService: AuthService) { }

	ngOnInit() {
		this.authStatus = this.authService.isAuth;
	}

	// Fonction qui simule l'authentification de l'utilisateur
	onSignIn() {
		this.authService.signIn().then(() => {
			// Authentification de l'utilisateur
			console.log('connexion réussie');
			// Récupération de l'état de l'authentification
			this.authStatus = this.authService.isAuth;
		});
	}

	// Fonction qui simule la déconnexion de l'utilisateur
	onSignOut() {
		// Déconnexion de l'utilisateur
		this.authService.signOut();
		console.log('déconnexion');
		// Récupération de l'état de l'authentification
		this.authStatus = this.authService.isAuth;
	}
}
