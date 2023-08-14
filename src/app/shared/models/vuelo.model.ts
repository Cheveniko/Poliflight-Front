export interface vueloBusqueda{
  origen: string,
  destino: string,
  fechaVuelo: Date,
  pasajero: pasajeroCantidad,
  totalPasajeros: number,
}

export interface pasajeroCantidad {
  cantAdulto: number,
  cantNino: number,
  cantInfante: number,
}
