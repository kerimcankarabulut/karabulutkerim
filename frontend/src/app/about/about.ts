import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  
  // TextBox alanları ve varsayılan değerler
  aboutForm = new FormGroup({
    isim: new FormControl('Kerim'),
    yas: new FormControl('19'),
    sehir: new FormControl('İzmir'),
    meslek: new FormControl('Bilgi Güvenliği Teknolojisi'),
    linkedin: new FormControl(''),
    github: new FormControl('')
  });

  // Fotoğrafı hafızada tutacağımız değişken
  secilenFotograf: string | ArrayBuffer | null = null;

  // Bilgisayardan fotoğraf seçilince çalışacak motor
  fotografYukle(event: any) {
    const dosya = event.target.files[0];
    if (dosya) {
      const okuyucu = new FileReader();
      okuyucu.onload = (e) => {
        if (e.target?.result) {
          this.secilenFotograf = e.target.result;
        }
      };
      okuyucu.readAsDataURL(dosya);
    }
  }

  kaydet() {
    console.log("Güncel Bilgiler:", this.aboutForm.value);
    alert("Hakkımda bilgileri başarıyla güncellendi!");
  }
}