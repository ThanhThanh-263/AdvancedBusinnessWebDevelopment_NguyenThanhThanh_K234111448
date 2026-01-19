import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { About } from './about/about';
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct2 } from './listproduct2/listproduct2';
import { Listproduct3 } from './listproduct3/listproduct3';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Listcustomer } from './listcustomer/listcustomer';
import { Customerdetail } from './customerdetail/customerdetail';
import { Listcustomerservicer } from './myservice/listcustomerservicer/listcustomerservicer';
import { ProductComponent } from './exercise19/product-component/product-component';
import { ListProductComponent } from './exercise19/list-product-component/list-product-component';
import { ServiceProductComponent } from './exercise19/service-product-component/service-product-component';

const routes: Routes = [
  { path: 'gioi-thieu', component: About },
  { path: 'sanpham1', component: Listproduct1 },
  { path: 'sanpham2', component: Listproduct2 },
  { path: 'sanpham3', component: Listproduct3 },

  { path: 'list-Customer', component: Listcustomer },
  { path: 'list-Customer/:id', component: Customerdetail },

  { path: 'list-customer-service', component: Listcustomerservicer },
  { path: 'list-customer-service/:id', component: Customerdetail },
  {path:'product',component:ProductComponent},
  {path:'product',component:ListProductComponent},
  {path:'product',component:ServiceProductComponent},
    { path: '*', component: Pagenotfound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductComponent, ListProductComponent, ServiceProductComponent];
