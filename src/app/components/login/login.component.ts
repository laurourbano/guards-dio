import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
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
