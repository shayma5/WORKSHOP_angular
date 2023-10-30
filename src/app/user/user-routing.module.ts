import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserLComponent } from '../user-l/user-l.component';

const routes: Routes = [
  {path:"",component:ListUserComponentComponent},
  {path:"updateUser/:param", component:UpdateuserComponent},
  {path:"adduser", component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
