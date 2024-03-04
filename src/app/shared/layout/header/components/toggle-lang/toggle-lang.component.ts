import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-toggle-lang',
  standalone: true,
  imports: [CommonModule],
  template: `<button>
    <img
      src="https://www.webankieta.pl/wp-content/themes/webankieta/img/icons/earth.svg"
      alt="ikona ziemii"
      width="17"
      height="17"
      class="earth-icon"
    />
    <span>PL</span>
  </button>`,
  styleUrl: './toggle-lang.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleLangComponent {}
