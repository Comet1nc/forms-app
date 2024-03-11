import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-link-list',
  standalone: true,
  imports: [CommonModule],
  template: `<ul>
    <li>
      <a href="#functions"> Funkcje </a>
    </li>
    <li><a href="#"> Zastosowania </a></li>
    <li><a href="#"> Przykłady ankiet </a></li>
    <li><a href="#"> Cennik </a></li>
    <li><a href="#"> Wiedza </a></li>
    <li><a href="#"> Kreator ankiet </a></li>
  </ul>`,
  styleUrl: './link-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkListComponent {}
