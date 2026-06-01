import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/';
  
  constructor(private http: HttpClient) {}

  getContentById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}contents/${id}/`);
  }

  getHakkimda(): Observable<any> {
    return this.http.get(`${this.apiUrl}hakkimda/`);
  }

  getContents(): Observable<any> {
    return this.http.get(`${this.apiUrl}contents/`);
  }

  postIletisim(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}iletisim/`, data);
  }
}