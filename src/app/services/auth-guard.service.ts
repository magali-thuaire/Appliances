import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate {

	constructor(private authService: AuthService,
				private router: Router) {
	}

	// Methode qui autorise la navigation si l'utilisateur est authentifié
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		// Si l'utilisateur est authentifié
		if (this.authService.isAuth) {
			// Navigation autorisée
			return true;
		// Sinon
		} else {
			// Redirection
			this.router.navigate(['auth']);
		}
	}

}
