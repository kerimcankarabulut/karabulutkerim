import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class AdminComponent {
  // Hocanın listede tam olarak istediği o varsayılan kategoriler
  kategoriler: string[] = [
    "Teknik Bilgi",
    "Teknik Olmayan Bilgi",
    "Araştırmalarım",
    "Hobilerim",
    "Okuduğum Kitaplar"
  ];

  yeniKategori: string = '';

  // 1. Kategori Ekleme Fonksiyonu (Create)
  kategoriEkle() {
    if (this.yeniKategori.trim()) {
      this.kategoriler.push(this.yeniKategori.trim());
      this.yeniKategori = ''; // Ekledikten sonra kutuyu temizle
    }
  }

  // 2. Kategori Silme Fonksiyonu (Delete)
  kategoriSil(index: number) {
    this.kategoriler.splice(index, 1);
  }

  // 3. Kategori Güncelleme Fonksiyonu (Update)
  kategoriGuncelle(index: number) {
    const guncelAd = prompt("Kategorinin yeni adını girin:", this.kategoriler[index]);
    if (guncelAd !== null && guncelAd.trim() !== "") {
      this.kategoriler[index] = guncelAd.trim();
    }
  }
}