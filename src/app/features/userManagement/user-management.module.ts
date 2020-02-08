import { NgModule } from '@angular/core';

import { AddUserComponent, EditUserComponent, ViewUserComponent, UserOverviewComponent } from './components';
import { CommonModule } from '@angular/common';
import { userManagementRouting } from './user-management.routing';

@NgModule({
    imports: [
        CommonModule,
        userManagementRouting,
    ],
    exports: [],
    declarations: [AddUserComponent, EditUserComponent, ViewUserComponent, UserOverviewComponent],
    providers: [],
})
export class UserManagementModule { }
