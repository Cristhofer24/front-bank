import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'index',loadComponent:()=>import('./index/index.component')},
  {path:'**',
    redirectTo:'index'
  },

];
