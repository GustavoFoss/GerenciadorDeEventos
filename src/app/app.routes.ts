import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventRegisterComponent } from './event-register/event-register.component';
import {RegisterComponent} from './register/register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'events', component: EventListComponent },
  { path: 'register-event', component: EventRegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'events' },
];
