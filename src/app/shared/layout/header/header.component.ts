import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToggleLangComponent } from './components/toggle-lang/toggle-lang.component';
import { LogoComponent } from './components/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <div class="container">
        <app-logo></app-logo>
        <ul>
          <li>Funkcje</li>
          <li>Zastosowania</li>
          <li>Przykłady ankiet</li>
          <li>Cennik</li>
          <li>Wiedza</li>
          <li>Kreator ankiet</li>
        </ul>
        <ul>
          <li>
            <button>Zaloguj</button>
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
  imports: [CommonModule, ToggleLangComponent, LogoComponent],
})
export class HeaderComponent {}
