import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { DashboardComponent } from './pages/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './shared/layout/layout.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        LayoutModule,
        AppRoutes,
    ],
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
