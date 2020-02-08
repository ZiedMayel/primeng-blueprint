import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './features/dahsboard/dashboard.component';
import { MainComponent } from './shared/layout/main/main.component';
import { NgModule } from '@angular/core';
import { LayoutModule } from './shared/layout/layout.module';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'users',
                loadChildren: () => import('./features/userManagement/user-management.module').then(m => m.UserManagementModule)
            },
        ]
    }
];
@NgModule({
    imports: [LayoutModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
