import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  imports: [
    FormsModule
  ]
})
export class EventRegisterComponent {
  evento = {
    nome: '',
    descricao: '',
    data: '',
    tipo: 'Publico',
  };

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {
    this.apiService.registerEvento(this.evento).subscribe(
      () => {
        alert('Evento cadastrado com sucesso!');
        this.router.navigate(['/event-list']);
      },
      (error) => {
        console.error('Erro ao cadastrar evento:', error);
        alert('Ocorreu um erro ao cadastrar o evento.');
      }
    );
  }
}
