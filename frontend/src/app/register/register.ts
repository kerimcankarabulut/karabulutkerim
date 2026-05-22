import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../account'; // Kuryemizi çağırıyoruz

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  // Formumuzu ve kurallarını oluşturuyoruz
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    yas: new FormControl('', Validators.required),
    cinsiyet: new FormControl('', Validators.required) // Hocanın istediği radio button için
  });

  constructor(private accountService: AccountService) {}

  onSubmit() {
    if (this.registerForm.valid) {
      console.log("Kayıt Bilgileri:", this.registerForm.value);
      // İleride kuryeye bu bilgileri verip Django'ya yollayacağız
    } else {
      alert("Lütfen tüm alanları eksiksiz doldurun!");
    }
  }
}