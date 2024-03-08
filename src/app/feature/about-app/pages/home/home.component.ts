import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WelcomeSectionComponent } from './section-components/welcome-section/welcome-section.component';
import { SchemeSectionComponent } from './section-components/scheme-section/scheme-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-welcome-section></app-welcome-section>
    <app-scheme-section></app-scheme-section>
  `,
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, WelcomeSectionComponent, SchemeSectionComponent],
})
export class HomeComponent {}
