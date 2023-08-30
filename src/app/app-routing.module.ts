import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './admin-dashboard/components/listado/listado.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  {
    //Path en caso de que no se coloque nada
    path: '',
    redirectTo: '/admin-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'admin-dashboard',
    component: ListadoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
