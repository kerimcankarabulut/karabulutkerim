import { Routes } from '@angular/router';
import { LoginComponent } from './login/login'; 
import { RegisterComponent } from './register/register';
import { KadinComponent } from './kadin/kadin';
import { ErkekComponent } from './erkek/erkek';

export const routes: Routes = [
  // Site ilk açıldığında otomatik olarak login sayfasına yönlendir
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'kadin', component: KadinComponent },
  { path: 'erkek', component: ErkekComponent }
];