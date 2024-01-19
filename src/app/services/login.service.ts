import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token: {} = {
    nome: String,
    senha: String,
  };
  constructor() {}

  doLogin() {
    localStorage.setItem('token', JSON.stringify(this.token));
  }

  doLogout() {
    localStorage.clear();
  }
}
