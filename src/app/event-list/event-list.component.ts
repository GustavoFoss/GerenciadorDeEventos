import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  imports: [
    NgForOf,
    NgIf
  ]
})
export class EventListComponent implements OnInit {
  eventos: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    // Recupera o userId armazenado no localStorage
    const email = localStorage.getItem('Email'); // Ou o nome do usuário, se preferir

    if (email) {
      // Passa o userId para o serviço
      this.apiService.getEventos(email).subscribe(
        (data: any[]) => {
          this.eventos = data;
        },
        (error) => {
          console.error('Erro ao carregar eventos:', error);
        }
      );
    } else {
      console.error('Usuário não está logado');
    }
  }

  onRegisterEvent() {
    this.router.navigate(['/register-event']);  // Redireciona para a página de registro de evento
  }

}
