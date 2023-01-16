import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProductComponent } from './component/product/product.component';
import { SellerComponent } from './component/seller/seller.component';

const routes: Routes = [
  
  
  
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'seller',
    component:SellerComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  
  {path:'product', component :ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
