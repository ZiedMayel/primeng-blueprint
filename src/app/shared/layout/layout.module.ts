import { NgModule } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
import { AppTopBarComponent } from './topbar/app.topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppFooterComponent } from './footer/app.footer.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SidebarSubMenuComponent } from './sidebar/sidebar.submenu.component';
import { MainComponent } from './main/main.component';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        CommonModule,
        ScrollPanelModule,
        ButtonModule
    ],
    exports: [AppTopBarComponent, SidebarComponent, SidebarSubMenuComponent, AppFooterComponent, MainComponent],
    declarations: [AppTopBarComponent, SidebarComponent, SidebarSubMenuComponent, AppFooterComponent, MainComponent],
    providers: [SidebarComponent],
})
export class LayoutModule { }
