import { ChangeDetectionStrategy, Component, OnInit, HostBinding } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
	@HostBinding() class = 'app-login';

	constructor() {}

	ngOnInit(): void {}
}
