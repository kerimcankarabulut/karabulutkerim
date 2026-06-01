import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../services/api';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent implements OnInit {
  hakkimda: any = null;
  fullImageUrl: string = '';
  veriHazir: boolean = false; 

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.apiService.getHakkimda().subscribe({
      next: (data: any) => {
        this.hakkimda = Array.isArray(data) ? data[0] : data;
        
        if (this.hakkimda) {
            if (this.hakkimda.fotograf) {
                this.fullImageUrl = this.hakkimda.fotograf.startsWith('http') 
                    ? this.hakkimda.fotograf 
                    : 'http://127.0.0.1:8000' + this.hakkimda.fotograf;
            }
            
            this.veriHazir = true; 
            this.cdr.detectChanges(); 
        }
      },
      error: (err: any) => {
        console.error("API Hatası:", err);
      }
    });
  }
}