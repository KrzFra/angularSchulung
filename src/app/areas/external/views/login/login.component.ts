import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@core/services/login/login.service';
import { Subject } from 'rxjs';
import { delay, first, takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnDestroy {
	@HostBinding() class = 'app-login';

	formGroup = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	});

	hasLoginFailed = false;
	isLoginCheckInProgress = false;

	private _destroyed$ = new Subject<void>();

	constructor(
		private _loginService: LoginService,
		private _router: Router,
		private _changeDetector: ChangeDetectorRef
	) {}

	onSubmit_form() {
		if (this.formGroup.valid && !this.isLoginCheckInProgress) {
			this._loginService
				.checkLogin(this.formGroup.get('username').value, this.formGroup.get('password').value)
				.pipe(delay(2000), first(), takeUntil(this._destroyed$))
				.subscribe((loginSuccesfull: boolean) => {
					this.isLoginCheckInProgress = false;

					if (loginSuccesfull) {
						this._router.navigate(['/internal/reserved-seats']);
					} else {
						this.hasLoginFailed = true;
					}

					this._changeDetector.markForCheck();
				});
		}

		this.hasLoginFailed = false;
		this.isLoginCheckInProgress = true;
	}

	ngOnDestroy() {
		this._destroyed$.next();
		this._destroyed$.complete();
	}
}
