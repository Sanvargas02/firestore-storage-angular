import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes -> Mis 3 Rutas o Páginas
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule //Importamos el routing child
  ]
})
export class AuthModule { }
