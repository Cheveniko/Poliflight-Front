import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioVueloComponent } from './formulario-vuelo/formulario-vuelo.component';
import { FormularioPasajeroComponent } from './formulario-pasajero/formulario-pasajero.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioVueloComponent,
    FormularioPasajeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
