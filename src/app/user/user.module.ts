import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { FormsModule } from '@angular/forms';
import { UserLComponent } from '../user-l/user-l.component';


@NgModule({
  declarations: [
    AddUserComponent,
    ListUserComponentComponent,
    UserLComponent,
    UpdateuserComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
