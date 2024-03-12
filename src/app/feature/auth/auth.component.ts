import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  template: `
    <app-auth-header></app-auth-header>
    <router-outlet></router-outlet>
  `,
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AuthHeaderComponent, LoginComponent, RouterOutlet],
})
export class AuthComponent {}
