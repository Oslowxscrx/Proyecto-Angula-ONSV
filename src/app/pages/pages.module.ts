import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SellerComponent } from './seller/seller.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    CategoriesComponent,
    PagesComponent,
    SellerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    ProductsComponent,
    CategoriesComponent,
    PagesComponent
  ]
})
export class PagesModule { }
