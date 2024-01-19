import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  logado: boolean = false;

  constructor(private service: LoginService, private router: Router) {
    if (localStorage.getItem('token')) {
      this.logar();
    }
  }
  logar() {
    this.service.doLogin();
    this.router.navigate(['/produtos']);
    this.logado = true;
  }
}
