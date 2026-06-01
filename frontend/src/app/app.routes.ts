import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { BlogDetailComponent } from './blog-detail/blog-detail';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Blog Vitrini | Karabulut' },
  { path: 'about', component: AboutComponent, title: 'Hakkımda | Karabulut' },
  { path: 'blog/:id', component: BlogDetailComponent }
];