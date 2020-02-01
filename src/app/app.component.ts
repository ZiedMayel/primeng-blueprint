import { Component, Renderer, NgZone, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppMenuComponent } from './shared/layout/sidebar/app.menu.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    model: any[];
    sidebarActive: boolean;

    constructor(public sidebar: AppMenuComponent) {
    }

    ngOnInit(): void {
        this.model = [
            { label: 'Dashboard', routerLink: ['/'] },
            {
                label: 'Menu Hierarchy',
                items: [
                    {
                        label: 'Submenu 1',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                items: [
                                    { label: 'Submenu 1.1.1' },
                                    { label: 'Submenu 1.1.2' },
                                    { label: 'Submenu 1.1.3' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2',
                                items: [
                                    { label: 'Submenu 1.2.1' },
                                    { label: 'Submenu 1.2.2' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                items: [
                                    { label: 'Submenu 2.1.1' },
                                    { label: 'Submenu 2.1.2' },
                                    { label: 'Submenu 2.1.3' }
                                ]
                            },
                            {
                                label: 'Submenu 2.2',
                                items: [
                                    { label: 'Submenu 2.2.1' },
                                    { label: 'Submenu 2.2.2' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 3',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                items: [
                                    { label: 'Submenu 2.1.1', routerLink: ['/sub29'] },
                                    { label: 'Submenu 2.1.2' },
                                    { label: 'Submenu 2.1.3' }
                                ]
                            },
                            {
                                label: 'Submenu 2.2',
                                items: [
                                    { label: 'Submenu 2.2.1' },
                                    { label: 'Submenu 2.2.2' }
                                ]
                            },
                        ]
                    }
                ]
            }
        ];
    }
}
