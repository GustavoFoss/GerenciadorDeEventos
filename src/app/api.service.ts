import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://localhost:7046/api';

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuario/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuario/login`, data);
  }

  getEventos(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/evento/get-eventos`);
  }


  registerEvento(evento: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/evento/register`, evento);
  }
}
