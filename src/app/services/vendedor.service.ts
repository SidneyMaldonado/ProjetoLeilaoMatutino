import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendedor } from '../entities/vendedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private http: HttpClient) { }
  

  listar(): Observable<any>{
    return this.http.get<Vendedor[]>("http://localhost:8080/vendedor");
  }
}
