import { Routes } from '@angular/router';
import NavbarComponent from './Pages/home/navbar/navbar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { Component } from '@angular/core';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { GeneralLayoutComponent } from './layouts/general-layout/general-layout.component';
import DashboardComponent from './Admin/dashboard/dashboard.component';
import { MainComponent } from './Admin/dashboard/components/main/main.component';
import { CuentasAdminComponent } from './Admin/dashboard/pages/cuentas-admin/cuentas-admin.component';
import { EmpleadosAdminComponent } from './Admin/dashboard/pages/empleados-admin/empleados-admin.component';
import { ExpedienteAdminComponent } from './Admin/dashboard/pages/expediente-admin/expediente-admin.component';
import { MovimientosAdminComponent } from './Admin/dashboard/pages/movimientos-admin/movimientos-admin.component';
import { UsuariosAdminComponent } from './Admin/dashboard/pages/usuarios-admin/usuarios-admin.component';


export const routes: Routes = [
  {
    path: '',
    component:MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home', loadComponent: () => import('./Pages/home/home.component') },
      { path: 'login', loadComponent: () => import('./login/login.component') },
      { path: 'Registro', loadComponent: () => import('./Pages/cliente/cliente.component') },
      { path: 'GestorRoles',loadComponent: () => import('./Pages/gestor-roles/gestor-roles.component') },
      {path:  'CrearRoles', loadComponent: () => import('./Pages/crear-roles/crear-roles.component')},
      {path: 'AgregarAsesores', loadComponent: () => import('./Pages/agregar-asesores/agregar-asesores.component')},

    ]
  },

  {
    path:'',
    component:GeneralLayoutComponent,
    children: [
      { path: 'user/:clienteId', loadComponent: () => import('./login/registro-empleado/registro-empleado.component') },
      {path: 'CrearCuenta/:clienteId', loadComponent: () => import('./Pages/abrir-cuenta/abrir-cuenta.component')},
      {path: 'ConfirmarCuenta/:clienteId', loadComponent: () => import('./Pages/confirmar-cuenta/confirmar-cuenta.component')},
    ]
  },
  {
    path:'DatosCliente/:clienteId',
    component:ClientLayoutComponent,
    children:[
      {path: '', loadComponent: () => import('./Pages/datos-cliente/datos-cliente.component')},
    ]
  },

  {
    path: 'Dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'AdminCliente', loadComponent: () => import('./Admin/dashboard/pages/admin-cliente/admin-cliente.component') },
      {path:'CuentasAdmin',component:CuentasAdminComponent},
      {path:'ExpedienteAdmin',component:ExpedienteAdminComponent},
      {path:'MovimientosAdmin',component:MovimientosAdminComponent},
      {path:'UsuariosAdmin',component:UsuariosAdminComponent},
      {path:'EmpleadosAdmin',component:EmpleadosAdminComponent},
    ]
  },
  {
    path: '**',
    redirectTo: 'Home',

  },

];
