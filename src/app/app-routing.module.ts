import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';



const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  { 
    path: '', 
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) 
  },
  {
    //Display when path not found
    path:'**',
    component:PageNotFoundComponent
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
