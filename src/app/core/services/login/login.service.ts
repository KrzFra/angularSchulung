import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	isLoggedIn = new BehaviorSubject<boolean>(false);

	constructor(private http: HttpClient) {}

	checkLogin(username: string, password: string) {
		return this.http
			.get<boolean>('/api/login', { headers: { username, password } })
			.pipe(
				tap((result: boolean) => {
					this.isLoggedIn.next(result);
				})
			);
	}
}
