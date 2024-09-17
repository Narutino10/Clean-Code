import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MotoListComponent } from './moto-list/moto-list.component';
import { AddMotoFormComponent } from './add-moto-form/add-moto-form.component';
import { MotoDetailComponent } from './moto-detail/moto-detail.component';
import { EditMotoFormComponent } from './edit-moto-form/edit-moto-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MotoListComponent,
    AddMotoFormComponent,
    MotoDetailComponent,
    EditMotoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
