import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoComponent } from '../../../../shared/layout/header/components/logo/logo.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-header',
  standalone: true,
  template: `
    <header>
      <div class="container">
        <app-logo></app-logo>
        <div class="btns" style="gap: 20px; display: flex;">
          <a class="switch-auth-method" routerLink="login">Login</a>
          <a class="switch-auth-method" routerLink="register">Register</a>
        </div>
      </div>
    </header>
  `,
  styleUrl: './auth-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, LogoComponent, RouterLink],
})
export class AuthHeaderComponent {}
