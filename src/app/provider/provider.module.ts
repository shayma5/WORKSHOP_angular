import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { AddProviderComponent } from './add-provider/add-provider.component';


@NgModule({
  declarations: [
    AddProviderComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule
  ]
})
export class ProviderModule { }
