import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../account';
import { Router } from '@angular/router'; 

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

  constructor(private accountService: AccountService, private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const girilenEmail = this.loginForm.value.email?.toLowerCase();
      
      console.log("Giriş Bilgileri:", this.loginForm.value);

      // HOCANIN İSTEDİĞİ YENİ KURAL: ROL BAZLI YÖNLENDİRME (AŞAMA 4)
      if (girilenEmail && girilenEmail.includes('admin')) {
        // E-postada 'admin' varsa Yetkili say ve Yönetim Paneline yolla
        this.router.navigate(['/admin']);
      } else {
        // Yoksa Normal Kullanıcı say ve Blog Sayfasına yolla
        this.router.navigate(['/home']);
      }

    } else {
      alert("Lütfen e-posta ve şifrenizi eksiksiz girin!");
    }
  }
}