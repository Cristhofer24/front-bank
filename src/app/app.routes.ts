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
      { path: 'Registro', loadComponent: () => import('./Pages/cliente/cliente.component') },
      { path: 'Gestor_Roles',loadComponent: () => import('./Pages/gestor-roles/gestor-roles.component') },
      {path: 'Datos_Cliente', loadComponent: () => import('./Pages/datos-cliente/datos-cliente.component')},
      {path:  'Crear_Roles', loadComponent: () => import('./Pages/crear-roles/crear-roles.component')},
      {path: 'ConfirmarCuenta', loadComponent: () => import('./Pages/confirmar-cuenta/confirmar-cuenta.component')},
      {path: 'Agregar_Asesores', loadComponent: () => import('./Pages/agregar-asesores/agregar-asesores.component')},
      {path: 'CrearCuenta/:clienteId', loadComponent: () => import('./Pages/abrir-cuenta/abrir-cuenta.component')},


    ]
  },
  { path: 'Dashboard', loadComponent: () => import('./Admin/dashboard/dashboard.component') },

  {
    path: '**',
    redirectTo: 'Home',

  },

];
