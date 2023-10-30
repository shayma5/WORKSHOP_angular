import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponentComponent } from './user/list-user-component/list-user-component.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { MainInvoiceComponentComponent } from './main-invoice-component/main-invoice-component.component';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';
import { UserLComponent } from './user-l/user-l.component';

const routes: Routes = [
  {path:"listusers",loadChildren:()=>
  import('./user/user.module').then(m=>m.UserModule)},
  {path:"provider",loadChildren:()=>
  import('./provider/provider.module').then(m=>m.ProviderModule)}, 
  {path:"product",loadChildren:()=>
  import('./product/product.module').then(m=>m.ProductModule)}, 

  {path:"userl", component:UserLComponent},
  {path:"management", component:MainInvoiceComponentComponent},
  {path:"invoice/:param/:status", component:InvoiceComponentComponent},
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"**", component:ErrorpageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
