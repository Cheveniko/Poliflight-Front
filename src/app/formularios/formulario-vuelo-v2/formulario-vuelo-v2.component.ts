import { Component } from '@angular/core';
import { Aeropuerto } from 'src/app/shared/models/aeropuerto.model';
import { AeropuertosService } from 'src/app/services/aeropuertos.service';
import { VuelosService } from 'src/app/services/vuelos.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-formulario-vuelo-v2',
  templateUrl: './formulario-vuelo-v2.component.html',
  styleUrls: ['./formulario-vuelo-v2.component.scss'],
  providers:[AeropuertosService, VuelosService]
})
export class FormularioVueloV2Component {
  public errorPasajeros:Number;
  public origen:string;
  public destino:string;
  public fecha:string;
  public pasajeros:any;
  public adultos:number;
  public niños:number;
  public infantes:number;
  vuelos:any[];
  aeropuertos:any;
  lugares:any[];
  origenes:any[];
  destinos:any[];
  constructor(private fb: FormBuilder,
    private router: Router,
    private _aeropuertoService: AeropuertosService,
    private _vueloService: VuelosService

//private studentService: StudentService
) { 
  this.destino="";
  this.origen="";
  this.fecha="";
  this.pasajeros={adultos:1, ninos:0, infantes:0};
  this.errorPasajeros=-1;
}
ngOnInit(): void {
// Inicializar el FormGroup con los controles y validadores correspondientes
// this.formulario = this.fb.group({
// origen: ['', Validators.required],
// destino: ['', Validators.required],
// fechaVuelo: ['', Validators.required],
// adulto: ['', Validators.required],
// nino: ['', Validators.required],
// infante: ['', Validators.required],
// });
this._aeropuertoService.getAeropuertos().subscribe(
response=>{
this.aeropuertos=response;
this.lugares=this.aeropuertos.Aeropuertos;

this.origenes=this.lugares.slice();
this.destinos=this.lugares.slice();
  // console.log(this.lugares);
},error=>{
console.log(<any>error);
});
// Filtrar las opciones de aeropuerto según el valor ingresado por el usuario
//  this.opcionesFiltradas = this.formulario.get('origen')!.valueChanges.pipe(
//    startWith(''),
//    map(value => this.filtrarOpciones(value))
//  );
//  this.opcionesFiltradas = this.formulario.get('destino')!.valueChanges.pipe(
//   startWith(''),
//   map(value => this.filtrarOpciones(value))
// );
}
selectOrigen(value:any){
  this.origenes=this.lugares.slice();
  this.destinos=this.lugares.slice();
  let indexO=-1;
  let indexD=-1;
  // console.log(this.origenes);
  for(let i=0; i<this.lugares.length;i++){
    if (this.origenes[i]._id==this.origen){
      indexO=i;
    }
    if (this.destinos[i]._id==this.destino){
      indexD=i;
    }
  }
  console.log(indexO);
  console.log(indexD);
  if (indexO!=-1){
    this.destinos.splice(indexO,1);
  }
  if (indexD!=-1){
    this.origenes.splice(indexD,1);  
  } 
  // this.origen="";
  // this.destino="";
}
selectDestino(value:any){
  this.destinos=this.lugares.slice();
  this.origenes=this.lugares.slice();
  let index=0;
  // console.log(this.origenes);
  for(let i=0; i<this.destinos.length;i++){
    if (this.destinos[i]._id==this.destino){
      index=i;
    }
  }
  this.origenes.splice(index,1);
  // this.origenes.splice(index,1);  
  // this.origen="";
  // this.destino="";
}
comprobarPasajeros(value:any){
  if (this.pasajeros.adultos<=0){
    this.errorPasajeros=1;
  }
  else{
    if (this.pasajeros.infantes>this.pasajeros.adultos){
      this.errorPasajeros=2;
    }
    else{
      this.errorPasajeros=-1;
    }
  }
  console.log(this.errorPasajeros);
}
postBusqueda(form:NgForm){
  // console.log(form);
  let formEnvio={
    origen:this.origen,
    destino:this.destino,
    fechaVuelo:this.fecha,
    pasajero:this.pasajeros
  }
  sessionStorage.setItem('adultos',this.pasajeros.adultos);
  sessionStorage.setItem('ninos',this.pasajeros.ninos);
  sessionStorage.setItem('infantes',this.pasajeros.infantes);
  this._vueloService.buscarVuelos(formEnvio).subscribe(
    response=>{
        console.log(response.result);
        this.vuelos=response.result;
      },error=>{
      console.log(<any>error);
      });
}
cambiarFecha(value:any){
  this.fecha='algo';
}
}
