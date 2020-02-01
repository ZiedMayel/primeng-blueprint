import { NgModule } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
import { AppTopBarComponent } from './topbar/app.topbar.component';
import { AppMenuComponent } from './sidebar/app.menu.component';
import { AppFooterComponent } from './footer/app.footer.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSubMenuComponent } from './sidebar/app.submenu.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        CommonModule,
        ScrollPanelModule,
        ButtonModule
    ],
    exports: [AppTopBarComponent, AppMenuComponent, AppSubMenuComponent, AppFooterComponent],
    declarations: [AppTopBarComponent, AppMenuComponent, AppSubMenuComponent, AppFooterComponent],
    providers: [AppMenuComponent],
})
export class LayoutModule { }
