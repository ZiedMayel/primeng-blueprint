import { Component } from '@angular/core';
import { AppMenuComponent } from '../sidebar/app.menu.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {

    constructor(private sidebar: AppMenuComponent) { }

    onMenuButtonClick(event: Event) {

        this.sidebar.changeState(event);
    }
}
