import { Routes } from '@angular/router';
import NavbarComponent from './Pages/home/navbar/navbar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component:MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' }, 
      { path: 'Home', loadComponent: () => import('./Pages/home/home.component') },
      { path: 'login', loadComponent: () => import('./login/login.component') },
      { path: 'Registro', loadComponent: () => import('./Pages/cliente/cliente.component') },

    ]
  },
  { path: 'Dashboard', loadComponent: () => import('./Admin/dashboard/dashboard.component') },

  {
    path: '**',
    redirectTo: 'Home',
  },

];
