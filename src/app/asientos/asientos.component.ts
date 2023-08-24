import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VuelosService } from '../services/vuelos.service';

@Component({
  selector: 'app-asientos',
  templateUrl: './asientos.component.html',
  styleUrls: ['./asientos.component.scss'],
  providers: [VuelosService]
})
export class AsientosComponent implements OnInit{
  
  constructor(
    private _router:Router,
    private _route:ActivatedRoute,
    private _vueloService:VuelosService
  ){}

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let info = params['info'];
      // console.log(info);
      this.obtenerVueloClase(info);
    });
  }
  obtenerVueloClase(info:string){
    this._vueloService.getVuelo(info).subscribe(
      response=>{
        console.log(response);
      },error=>{
        console.log(error);
      }      
    );
    
  }
}
