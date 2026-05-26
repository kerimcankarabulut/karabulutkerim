import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { KadinComponent } from './kadin/kadin';
import { ErkekComponent } from './erkek/erkek';
// Yeni eklediğimiz sayfalar:
import { AdminComponent } from './admin/admin';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'kadin', component: KadinComponent },
  { path: 'erkek', component: ErkekComponent },
  // Yeni eklediğimiz yollar:
  { path: 'admin', component: AdminComponent }, // Yetkili yönetim paneli
  { path: 'home', component: HomeComponent },   // Normal kullanıcı ana sayfası
  { path: 'about', component: AboutComponent }  // Hakkımda sayfası
];