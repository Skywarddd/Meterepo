import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Meteo } from '../models/meteo.model';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  private apiUrl = "https://jsonplaceholder.typicode.com/todos" //template à changer
  constructor(private httpClient: HttpClient) { }

  getMeteo(): Observable<Meteo[]> {
    return this.httpClient.get<Meteo[]>(`${this.apiUrl}`); // template à changer
  }
}
