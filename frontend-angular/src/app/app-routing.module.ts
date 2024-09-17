// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotoListComponent } from './moto-list/moto-list.component';
import { AddMotoFormComponent } from './add-moto-form/add-moto-form.component';
import { MotoDetailComponent } from './moto-detail/moto-detail.component';
import { EditMotoFormComponent } from './edit-moto-form/edit-moto-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/motos', pathMatch: 'full' },
  { path: 'motos', component: MotoListComponent },
  { path: 'motos/add', component: AddMotoFormComponent },
  { path: 'motos/:id', component: MotoDetailComponent },
  { path: 'motos/:id/edit', component: EditMotoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
