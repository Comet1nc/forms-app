import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a href="#" class="logo">
      <img
        src="https://www.webankieta.pl/wp-content/uploads/2022/10/webankieta-logo-animated.svg"
        alt=""
      />
    </a>
  `,
  styleUrl: './logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}
