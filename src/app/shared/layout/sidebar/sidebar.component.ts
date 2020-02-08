import { Component, Input, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { ScrollPanel } from 'primeng/scrollpanel';
import { MainComponent } from '../main/main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit, AfterViewInit {

    @Input()
    model: any[];

    @Input()
    sidebarActive: boolean;

    @Output()
    openClose = new EventEmitter();

    @ViewChild('scrollPanel', { static: true }) layoutMenuScrollerViewChild: ScrollPanel;

    constructor() {
        this.sidebarActive = true;
    }

    ngAfterViewInit() {
        setTimeout(() => { this.layoutMenuScrollerViewChild.moveBar(); }, 100);
    }

    ngOnInit() {

    }

    changeState(event: Event) {

        this.sidebarActive = !this.sidebarActive;

        this.openClose.emit(this.sidebarActive);
    }
}


