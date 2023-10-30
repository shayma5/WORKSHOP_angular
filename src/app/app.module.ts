import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideComponent } from './slide/slide.component';
import { FooterComponent } from './footer/footer.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MainInvoiceComponentComponent } from './main-invoice-component/main-invoice-component.component';
import { InvoiceListComponentComponent } from './invoice-list-component/invoice-list-component.component';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ProviderModule } from './provider/provider.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MyDirectiveDirective,
    HomeComponent,
    SlideComponent,
    ErrorpageComponent,
    MainInvoiceComponentComponent,
    InvoiceListComponentComponent,
    InvoiceComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    ProductModule,
    ProviderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
