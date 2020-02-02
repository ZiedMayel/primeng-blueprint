import { Component, Input, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { ScrollPanel } from 'primeng/scrollpanel';

@Component({
    selector: 'app-menu',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, AfterViewInit {

    @Input()
    model: any[];

    @Input()
    sidebarActive: boolean;




    @ViewChild('scrollPanel', { static: true }) layoutMenuScrollerViewChild: ScrollPanel;

    constructor() {
    }

    ngAfterViewInit() {
        setTimeout(() => { this.layoutMenuScrollerViewChild.moveBar(); }, 100);
    }

    ngOnInit() {

    }

    changeState(event: Event) {

        this.sidebarActive = !this.sidebarActive;
        console.log(event);
        console.log(this.sidebarActive);
    }
}


