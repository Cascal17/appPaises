import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http:HttpClient) { }

  get httpParams(){
    return new HttpParams()
    .set("fields", "name,capital,flags,population,cca2");
  }

  buscarPais(termino:string): Observable<Country[]>{

    const url= `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParams})
    .pipe(
      tap(console.log)
    );
  }

  buscarCapital(termino:string): Observable<Country[]>{
    const url= `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params:this.httpParams});
  }

  getPaisPorCodigo(id:string): Observable<Country[]>{
    const url= `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(termino:string): Observable<Country[]>{

    const url= `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url, {params:this.httpParams} );
  }
}
