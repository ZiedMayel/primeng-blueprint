import { Component, Input, OnInit, AfterViewInit, ViewChild, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { ScrollPanel } from 'primeng/scrollpanel';

@Component({
    selector: 'app-menu',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, AfterViewInit, OnChanges {

    @Input()
    model: any[];
    sidebarActive: boolean;


    @ViewChild('scrollPanel', { static: true }) layoutMenuScrollerViewChild: ScrollPanel;

    constructor() {
        this.sidebarActive = true;
    }

    ngAfterViewInit() {
        setTimeout(() => { this.layoutMenuScrollerViewChild.moveBar(); }, 100);
    }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges): void {

    }


    changeState(event: Event) {

        console.log(event);
    }
}


