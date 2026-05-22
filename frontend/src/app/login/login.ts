import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../account'; 
import { Router } from '@angular/router'; // YÖNLENDİRME (ROUTER) MOTORU EKLENDİ

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  // Kuryemizin yanına bir de Şoför (Router) ekledik
  constructor(private accountService: AccountService, private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const girilenEmail = this.loginForm.value.email?.toLowerCase();
      
      console.log("Giriş Bilgileri:", this.loginForm.value);

      // HOCANIN İSTEDİĞİ CİNSİYETE GÖRE YÖNLENDİRME İŞ KURALI
      if (girilenEmail && girilenEmail.includes('kadin')) {
        // E-postada 'kadin' geçiyorsa Kadın sayfasına git
        this.router.navigate(['/kadin']);
      } else {
        // Geçmiyorsa Erkek sayfasına git
        this.router.navigate(['/erkek']);
      }

    } else {
      alert("Lütfen e-posta ve şifrenizi eksiksiz girin!");
    }
  }
}