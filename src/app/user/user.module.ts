import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { SharedModule } from '../shared/shared.module';
import { UserCreateComponent } from './components/user-create/user-create.component';

@NgModule({
    declarations: [
        UserListComponent,
        UserDetailComponent,
        UserCreateComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '', component: UserListComponent },
            { path: 'Create', component: UserCreateComponent },
            { path: ':id', component: UserDetailComponent },
        ]),
        
    ]
})
export class UserModule { }
