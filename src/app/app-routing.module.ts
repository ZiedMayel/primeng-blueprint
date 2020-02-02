import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard.component';
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
        ]
    }
];
@NgModule({
    imports: [LayoutModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
