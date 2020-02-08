import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {
    model: any[];
    sidebarActive: boolean;

    constructor(public sidebar: SidebarComponent) {

        this.sidebarActive = true;

        sidebar.openClose.subscribe(event => {
            this.sidebarActive = event;
        });

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
