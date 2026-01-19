import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { MyComponent } from './my-component/my-component';
import { Mybinding } from './mybinding/mybinding';
import { Ptb1 } from './ptb1/ptb1';
import { Mygpa } from './mygpa/mygpa';
import { Ptb2 } from './ptb2/ptb2';
import { FormsModule } from '@angular/forms';
import { Learndirective } from './learndirective/learndirective';
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct2 } from './listproduct2/listproduct2';
import { Customer } from './customer/customer';
import { Exercise18Component } from './exercise18/exercise18';
import { Exercise10 } from './exercise10/exercise10';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Listcustomer } from './listcustomer/listcustomer';
import { Customerdetail } from './customerdetail/customerdetail';
import { Listcustomerservicer } from './myservice/listcustomerservicer/listcustomerservicer';
import { Exercise19 } from './exercise19/exercise19';
import { ProductComponent } from './exercise19/product-component/product-component';
import { ListProductComponent } from './exercise19/list-product-component/list-product-component';
import { ServiceProductComponent } from './exercise19/service-product-component/service-product-component';
@NgModule({
  declarations: [
    App,
    About,
    Contact,
    MyComponent,
    Mybinding,
    Ptb1,
    Mygpa,
    Ptb2,
    Learndirective,
    Listproduct1,
    Listproduct2,
    Customer,
    Exercise18Component,
    Exercise10,
    Pagenotfound,
    Listcustomer,
    Customerdetail,
    Listcustomerservicer,
    Exercise19,
    ProductComponent,
    ListProductComponent,
    ServiceProductComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
