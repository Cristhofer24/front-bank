import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteCuentaService {
  private ApiUrl='http://localhost:8080/api/clienteCuenta';

  constructor(private http: HttpClient) { }

  visualizarDatos(id:number):Observable<any[]>{
   return this.http.get<any[]>(`${this.ApiUrl}/ObtenerCuentas?id=${id}`)
  }


}
