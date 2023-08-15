// export interface vueloBusqueda{
//   origen: string,
//   destino: string,
//   fechaVuelo: Date,
//   pasajero: pasajeroCantidad,
//   totalPasajeros: number,
// }

// export interface pasajeroCantidad {
//   cantAdulto: number,
//   cantNino: number,
//   cantInfante: number,
// }

export class Vuelo {
  constructor(
    public idAvion: string,
    public origen: string,
    public destino: string,
    public fechaVuelo: Date,
    public distanciaKM: number,
  ) {}
}
