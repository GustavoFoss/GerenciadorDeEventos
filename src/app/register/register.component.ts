import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ApiService} from '../api.service';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService) {
    this.registerForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      perfil: ['', [Validators.required]],
    });
  }

  // Lida com o envio do formulário
  onSubmit() {
    if (this.registerForm.valid) {
      // Chama o serviço de cadastro
      this.apiService.register(this.registerForm.value).subscribe(
        (response) => {
          console.log('Usuário registrado:', response);
          alert('Cadastro realizado com sucesso!');
          this.router.navigate(['/login']); // Redireciona para a página de login após o cadastro
        },
        (error) => {
          console.error('Erro ao cadastrar:', error);
          alert('Erro ao cadastrar. ' + error.error);
        }
      );
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  }
}
