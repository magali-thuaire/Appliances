export class AuthService {
	constructor() { }

	// Authentification de l'utilisateur
	isAuth = false;

	// Fonction qui simule l'authentification de l'utilisateur après 2s
	signIn() {
		return new Promise(
			(resolve, reject) => {
				this.isAuth = true;
				setTimeout(
					() => {
						resolve(true);
					},
					2000);
			}
		);
	}

	// Fonction qui simule la déconnexion de l'utilisateur
	signOut() {
		this.isAuth = false;
	}
}
