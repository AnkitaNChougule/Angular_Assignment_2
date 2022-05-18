import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnauthorizedScreenComponent } from './unauthorized-screen/unauthorized-screen.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path:'Login' ,component:LoginPageComponent},
  {path:'',redirectTo:'Login',pathMatch:'full'},//initially display Login
  {path:'Unauthorized',component:UnauthorizedScreenComponent},

];


@NgModule({
  declarations: [
    PageNotFoundComponent,
    LoginPageComponent,
    UnauthorizedScreenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports:[
    PageNotFoundComponent,
    LoginPageComponent,
    UnauthorizedScreenComponent
  ]
})
export class AuthModule { 
  constructor(){
    console.log("Auth module load")
  }
}
