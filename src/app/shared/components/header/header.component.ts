import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
	@HostBinding() class = 'app-header';

	constructor() {}

	ngOnInit(): void {}
}
