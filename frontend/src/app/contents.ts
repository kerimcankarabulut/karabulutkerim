import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {
  // Blog yazıları ve kategoriler için Django adreslerimiz
  private contentUrl = 'http://127.0.0.1:8000/api/contents/';
  private categoryUrl = 'http://127.0.0.1:8000/api/categories/';

  constructor(private http: HttpClient) { }

  // İçerikleri (Blog yazılarını) getirme
  getContents(): Observable<any> {
    return this.http.get(this.contentUrl);
  }

  // Kategorileri getirme
  getCategories(): Observable<any> {
    return this.http.get(this.categoryUrl);
  }
}