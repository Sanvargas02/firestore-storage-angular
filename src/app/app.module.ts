import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { ListadoComponent } from './admin-dashboard/components/listado/listado.component';
import { AgregarComponent } from './admin-dashboard/components/agregar/agregar.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RecuperacionComponent } from './auth/components/recuperacion/recuperacion.component';

import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    AgregarComponent,
    LoginComponent,
    RecuperacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AdminDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
