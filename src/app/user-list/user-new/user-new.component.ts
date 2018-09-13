import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/User.model';

@Component({
	selector: 'app-user-new',
	templateUrl: './user-new.component.html',
	styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

	// Formulaire
	userForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private userService: UserService,
		private router: Router
	) {}

	// Initialisation
	ngOnInit() {
		this.initForm();
	}

	// Fonction qui initialise le formulaire
	initForm() {
		this.userForm = this.formBuilder.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			hobbies: this.formBuilder.array([])
		});
	}

	// Fonction qui soumet le formulaire
	onSubmit() {
		// Récupération des valeurs
		const formValue: any = this.userForm.value;
		// Création d'un nouvel utilisateur
		const newUser: User = new User(
			formValue['firstName'],
			formValue['lastName'],
			formValue['email'],
			formValue['hobbies'] ? formValue['hobbies'] : []
		);
		// Ajout du nouvel utilisateur
		this.userService.addUser(newUser);
		// Redirection vers la liste des utilisateurs
		this.router.navigate(['/users']);
	}

	getHobbies() {
		return this.userForm.get('hobbies') as FormArray;
	}

	onAddHobby() {
		const newHobbyControl = this.formBuilder.control('', Validators.required);
		this.getHobbies().push(newHobbyControl);
	}
}
