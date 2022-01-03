import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Raca } from '../entities/raca';

@Injectable({
  providedIn: 'root'
})
export class RacaService {

  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<Raca[]>("http://localhost:8080/raca");
  }
}
