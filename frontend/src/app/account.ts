import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // Arka plandaki Django mutfağımızın adresi
  private apiUrl = 'http://127.0.0.1:8000/api/users/';

  constructor(private http: HttpClient) { }

  // Sisteme yeni kullanıcı (kayıt) gönderme fonksiyonu
  registerUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}