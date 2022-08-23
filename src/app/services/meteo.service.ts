import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Meteo } from '../models/meteo.model';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  //URL de base sans le code INSEE
  private apiUrl = "https://api.meteo-concept.com/api/forecast/daily?token=a4932fe1f52e2cbaba3d8004e8f205628ec6e87df32df9b95d37058495220502" 
  constructor(private httpClient: HttpClient) { }

  //code correspond au code insee à rentrer
  getMeteos(code: string): Observable<Meteo[]> {
    return this.httpClient.get<Meteo[]>(`${this.apiUrl}`); 
  }

  getMeteobyInsee(code: string): Observable<Meteo> {
    return this.httpClient.get<Meteo>(`${this.apiUrl}&insee=` + code); 
  }
}
