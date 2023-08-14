import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormularioPasajeroComponent } from './formularios/formulario-pasajero/formulario-pasajero.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: 'dato-pasajero', component: FormularioPasajeroComponent},
  //{path: '', redirectTo:'home'},
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
