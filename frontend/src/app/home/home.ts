import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../services/api';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {
  bloglar: any[] = [];
  hakkimda: any = null;
  fullImageUrl: string = '';
  veriHazir: boolean = false;

  iletisimData = { isim: '', email: '', mesaj: '' };
  mesajGonderildi: boolean = false;

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.apiService.getContents().subscribe({
      next: (blogData: any) => {
        this.bloglar = Array.isArray(blogData) ? blogData : (blogData.results || []);
        
        this.apiService.getHakkimda().subscribe({
          next: (hakkimdaData: any) => {
             this.hakkimda = Array.isArray(hakkimdaData) ? hakkimdaData[0] : hakkimdaData;
             if (this.hakkimda && this.hakkimda.fotograf) {
                 this.fullImageUrl = this.hakkimda.fotograf.startsWith('http') 
                    ? this.hakkimda.fotograf 
                    : 'http://127.0.0.1:8000' + this.hakkimda.fotograf;
             }
             this.veriHazir = true;
             this.cdr.detectChanges();
          }
        });
      },
      error: (err: any) => console.error("API Hatası:", err)
    });
  }

  mesajGonder() {
    if(!this.iletisimData.isim || !this.iletisimData.email || !this.iletisimData.mesaj) return;

    this.apiService.postIletisim(this.iletisimData).subscribe({
      next: (res: any) => { // BURASI DÜZELTİLDİ
        this.mesajGonderildi = true;
        this.iletisimData = { isim: '', email: '', mesaj: '' }; 
        this.cdr.detectChanges();
        
        setTimeout(() => { 
            this.mesajGonderildi = false; 
            this.cdr.detectChanges(); 
        }, 5000);
      },
      error: (err: any) => console.error("Mesaj gitmedi:", err) // BURASI DÜZELTİLDİ
    });
  }
}