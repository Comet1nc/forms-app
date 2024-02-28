import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'about-app',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>header</h1>
    <router-outlet></router-outlet>
  `,
  styleUrl: './about-app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutAppComponent {}
