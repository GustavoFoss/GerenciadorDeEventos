import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    FormsModule,
    RouterLink
  ]
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private apiService: ApiService, private router: Router) {}

  onLogin() {
    const credentials = { email: this.email, senha: this.password };
    this.apiService.login(credentials).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);

        // Decodifica o token para extrair o perfil do usuário
        const decodedToken = JSON.parse(atob(response.token.split('.')[1])); // Decodifica o payload do token
        localStorage.setItem('userRole', decodedToken.role); // Salva o perfil no localStorage
        localStorage.setItem('Email', decodedToken.email);

        this.router.navigate(['/event-list']);
      },
      (error) => {
        alert('Login falhou. Verifique suas credenciais.');
      }
    );
  }

}
