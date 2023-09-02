import { Component, OnInit } from '@angular/core';
import { BusquedaVuelo } from '../shared/models/vuelo.model';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.scss']
})
export class ItinerarioComponent {

  vuelo:any = JSON.parse(sessionStorage.getItem('selectedObjVuelo') || '{}');

  constructor(
    private cookieService:CookieService
  ){
    console.log(JSON.parse(this.cookieService.get('informacion')))
  }
}
