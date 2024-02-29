import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-toggle-lang',
  standalone: true,
  imports: [CommonModule],
  template: `<button>PL</button>`,
  styleUrl: './toggle-lang.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleLangComponent {}
