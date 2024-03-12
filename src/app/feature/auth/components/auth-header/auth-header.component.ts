import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoComponent } from '../../../../shared/layout/header/components/logo/logo.component';

@Component({
  selector: 'app-auth-header',
  standalone: true,
  template: `
    <header>
      <app-logo></app-logo>
    </header>
  `,
  styleUrl: './auth-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, LogoComponent],
})
export class AuthHeaderComponent {}
