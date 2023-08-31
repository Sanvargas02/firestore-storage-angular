import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //Quiero cargar el módulo de autenticación
  {
    path: 'auth', //Es un nombre cualquiera, pero lo llamo como mi módulo de autenticación
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ) //Importamos el Módulo Hijo.
  },
  {
    path: 'productos', //Es un nombre cualquiera, pero lo llamo como mi módulo de productos
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosModule ) //Importamos el Módulo Hijo.
  },
  {
    path: 'usuarios', //Es un nombre cualquiera, pero lo llamo como mi módulo de usuarios
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosModule ) //Importamos el Módulo Hijo.
  },
  {
    path: '**', //Path por defecto cuando ponen cualquier cosa o nada
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
