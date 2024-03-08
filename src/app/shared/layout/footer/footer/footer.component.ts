import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li>
        <span class="app-name"> 2024 Webankieta </span>
        <span> Powered by Comet </span>
      </li>
      <li>Gwarancja jakości i bezpieczeństwa</li>
    </ul>
  `,
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
