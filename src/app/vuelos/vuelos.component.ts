import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { VuelosService } from '../services/vuelos.service';
import { Vuelo } from '../shared/models/vuelo.model';
import { Aeropuerto } from '../shared/models/aeropuerto.model';
import { AeropuertoService } from '../services/aeropuerto.service';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent implements OnInit, OnDestroy{



  vuelosListaSubs: Subscription;
  vuelosLista: Vuelo[];

  constructor(private route: ActivatedRoute,
              private VuelosService: VuelosService,
              private aeropuertoService: AeropuertoService
    ) { }

  ngOnInit(): void {
    // this.vuelosListaSubs = this.VuelosService
    //   .getVuelos()
    //   .subscribe( res => {
    //     this.vuelosLista = res
    //     console.log(this.vuelosLista)
    //   },

      // console.error
      // );



  }

  ngOnDestroy(): void {
    this.vuelosListaSubs.unsubscribe()
  }
}
