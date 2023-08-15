import { API_URL } from './../env';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Vuelo } from '../shared/models/vuelo.model';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  constructor(private http : HttpClient) { }

  private static _handleError(err:HttpErrorResponse | any){
    return throwError((err.message || 'Server Error'))

  }

  getVuelos(): Observable<Vuelo[]> {

    return this.http
      .get<Vuelo[]>(`${API_URL}/vuelo`)
      .pipe(catchError(VuelosService._handleError))

  }

}
