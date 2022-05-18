import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth/authGuard/auth.guard';

const routes: Routes = [
  {path:'WelcomeScreen' ,canActivate:[AuthGuard],component:WelcomeScreenComponent},
  {path:'ProductList' ,component:ProductListComponent},
  {path:'AddNewProduct' , component:AddNewProductComponent},
  {path:'ProductDetails',component:ProductDetailsComponent},
  {path:'ProductDetails/:id',component:ProductDetailsComponent},
];


@NgModule({
  declarations: [
    WelcomeScreenComponent,
    AddNewProductComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    WelcomeScreenComponent,
    AddNewProductComponent,
    ProductDetailsComponent,
    ProductListComponent
  ]

})
export class FeaturesModule { 
  constructor(){
    console.log("Features module load")
  }
}
