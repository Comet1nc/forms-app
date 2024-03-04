import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `<figure class="logo">
    <object
      type="image/svg+xml"
      class="logo-image"
      data="https://www.webankieta.pl/wp-content/uploads/2022/10/webankieta-logo-animated.svg"
    ></object>
  </figure>`,
  styleUrl: './logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}
