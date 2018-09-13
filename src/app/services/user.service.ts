import { User } from '../models/user.model';
import { Subject } from 'rxjs';

export class UserService {

	private users: User[] = [
		{
			firstName: 'Magali',
			lastName: 'THUAIRE',
			email: 'magali.thuaire@gmail.com',
			hobbies: [ 'VolleyBall', 'Jeux de société', 'Origami']
		}
	];
	userSubject = new Subject<User[]>();

	constructor() { }

	// Emission des utilisateurs
	emitUsers() {
		this.userSubject.next(this.users.slice());
	}

	// Ajout d'un utilisateur
	addUser(user: User) {
		this.users.push(user);
		this.emitUsers();
	}
}
