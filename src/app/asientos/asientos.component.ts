import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VuelosService } from '../services/vuelos.service';

@Component({
  selector: 'app-asientos',
  templateUrl: './asientos.component.html',
  styleUrls: ['./asientos.component.scss'],
})
export class AsientosComponent {
  config = {
    region: 'sa', // e.g. "eu"
    workspaceKey: '26b63090-3ae6-4517-ac96-f899acb49252',
    event: 'Poliflight',
    session: 'continue',
    language: 'es',
    categoryFilter: { enabled: true, zoomOnSelect: true },
    pricing: [
      {
        category: 1,
        ticketTypes: [
          { ticketType: 'adult', price: 30 },
          { ticketType: 'child', price: 20 },
        ],
      },
      {
        category: 2,
        price: 50,
      },
    ],
    priceFormatter: (price: number) => '$' + price,
    selectedObjectsInputName: 'selectedSeatsField',
    holdTokenInputName: '',
  };
}
