import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimientos } from '../Interfaces/Movimientos';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  private apiUrl = 'http://localhost:8080/api/movimientos';
  constructor(private http: HttpClient) { }

  createMovimiento(movimiento: any): Observable<any> {
    return this.http.post<Movimientos>(this.apiUrl, movimiento).pipe(
      catchError(this.handleError)
    );
  }


  obtnerMovimientosbyfk(id:number):Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/ObtenerMovimientos?id=${id}`)
   }

   obtnerMovimientoRecientefk(id:number):Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/ObtenerMovimientoReciente?id=${id}`)
   }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error desconocido';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = error.error.message || 'Error en el servidor';
    }
    return throwError(() => new Error(errorMessage));
  }


}
