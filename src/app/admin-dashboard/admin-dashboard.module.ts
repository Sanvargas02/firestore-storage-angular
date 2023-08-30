import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { ListadoComponent } from './components/listado/listado.component';


@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ],
  exports: [
    ListadoComponent
  ]
})
export class AdminDashboardModule { }
