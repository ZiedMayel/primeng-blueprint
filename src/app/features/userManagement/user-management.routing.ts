import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserOverviewComponent } from './components';


export const routes: Routes = [
    {
        path: '',
        component: UserOverviewComponent,
        data: {
            pageTitle: 'Users'
        }
    }
];

export const userManagementRouting: ModuleWithProviders = RouterModule.forChild(routes);
