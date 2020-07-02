import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LoginStubService {
	isLoggedIn = new BehaviorSubject<boolean>(false);

	constructor() {}

	checkLogin(username: string, password: string) {
		const isLoginSuccessfull = username === 'username' && password === 'password';

		this.isLoggedIn.next(isLoginSuccessfull);

		return of(isLoginSuccessfull);
	}
}
