import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuenta } from '../Interfaces/Cuenta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CuentaService {

  private ApiUrl = 'http://localhost:8080/api/cuentas';

  constructor(private http: HttpClient) {}

  //Guardar Clientes
  createCuenta(cuentas: any): Observable<any> {
    return this.http.post<Cuenta>(this.ApiUrl, cuentas);
  }

  generarCuenta(tipoCuenta: string): Observable<any> {
    const params = new HttpParams().set('tipoCuenta', tipoCuenta);
    return this.http.get<any>(`${this.ApiUrl}/ObtenerValores`, { params });
  }
}
