import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'sobre',
    component: SobreComponent,
    title: 'GuardsDio | Sobre'
  },
  {
    path: 'produtos',
    component: ProdutosComponent,
    title: 'GuardsDio | Produtos',
    canActivate: [authGuard],
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'GuardsDio | Home'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'GuardsDio | Login'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
