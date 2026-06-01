import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css'
})
export class BlogDetailComponent implements OnInit {
  blog: any = null;
  veriHazir: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.apiService.getContents().subscribe({
        next: (data: any) => {
          const blogs = Array.isArray(data) ? data : (data.results || []);
          // Gelen ID'ye göre doğru blog yazısını eşleştiriyoruz
          this.blog = blogs.find((b: any) => b.id.toString() === id);
          this.veriHazir = true;
          this.cdr.detectChanges();
        },
        error: (err: any) => console.error("API Hatası:", err)
      });
    }
  }
}