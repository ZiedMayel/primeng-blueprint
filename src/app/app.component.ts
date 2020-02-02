import { Component, Renderer, NgZone, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {

    title = 'NG APP';

    constructor() { }

}
