import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Moto {
  id: string;
  modele: string;
  kilometrage: number;
}

@Injectable({
  providedIn: 'root'
})
export class MotoService {
  private apiUrl = 'http://localhost:3000/api/motos';

  constructor(private http: HttpClient) { }

  getMotos(): Observable<Moto[]> {
    return this.http.get<Moto[]>(this.apiUrl);
  }

  addMoto(moto: Moto): Observable<Moto> {
    return this.http.post<Moto>(this.apiUrl, moto);
  }
  
  getMotoById(id: string): Observable<Moto> {
    return this.http.get<Moto>(`${this.apiUrl}/${id}`);
  }

  updateMoto(id: string, moto: Moto): Observable<Moto> {
    return this.http.put<Moto>(`${this.apiUrl}/${id}`, moto);
  }
}
