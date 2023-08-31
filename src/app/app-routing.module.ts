import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //Quiero cargar el módulo de autenticación
  {
    path: 'auth', //Es un nombre cualquiera, pero lo llamo como mi módulo de autenticación
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ) //Importamos el Módulo Hijo
  },
  {
    path: '**',
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
