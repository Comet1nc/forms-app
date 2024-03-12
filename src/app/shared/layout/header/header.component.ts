import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ToggleLangComponent } from './components/toggle-lang/toggle-lang.component';
import { LogoComponent } from './components/logo/logo.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { fromEvent, map } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header [ngClass]="{ scrolled: isScrolled$ | async }">
      <div class="container">
        <app-logo></app-logo>
        <!-- <app-link-list></app-link-list> -->
        <ul>
          <li>
            <a class="login-btn" routerLink="auth/login">Zaloguj</a>
          </li>
          <li>
            <app-toggle-lang></app-toggle-lang>
          </li>
        </ul>
      </div>
    </header>
  `,
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ToggleLangComponent,
    LogoComponent,
    LinkListComponent,
    RouterLink,
  ],
})
export class HeaderComponent {
  isScrolled$ = fromEvent(window, 'scroll').pipe(
    map((e) => window.scrollY > 30)
  );
}
