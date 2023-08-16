import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormularioPasajeroComponent } from './formularios/formulario-pasajero/formulario-pasajero.component';
import { VuelosComponent } from './vuelos/vuelos.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: 'datos-pasajero/:id', component: FormularioPasajeroComponent},
  {path: 'vuelos', component: VuelosComponent},

  //{path: '', redirectTo:'home'},
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
