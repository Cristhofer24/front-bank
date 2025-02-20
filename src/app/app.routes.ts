import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'index',loadComponent:()=>import('./index/index.component')}, 
  {path:'login',loadComponent:()=>import('./login/login.component')},
  {path:'**',
    redirectTo:'index'
  },

];
