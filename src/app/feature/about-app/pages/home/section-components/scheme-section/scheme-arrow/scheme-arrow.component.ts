import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-scheme-arrow',
  standalone: true,
  imports: [CommonModule],
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="36"
    viewBox="0 0 20 36"
    fill="none"
  >
    <path
      d="M1.46821 -1.53283e-06C1.76821 -1.5066e-06 2.05171 0.116997 2.26321 0.329998L18.3432 16.41C18.7677 16.8345 19.0017 17.3985 19.0017 17.9985C19.0017 18.5985 18.7692 19.164 18.3447 19.5885L2.26321 35.67C2.05171 35.883 1.76821 36 1.46821 36C1.16821 36 0.884705 35.883 0.673205 35.67C0.460205 35.4585 0.343206 35.175 0.343206 34.875C0.343206 34.575 0.460205 34.2915 0.673205 34.08L16.7532 18L0.673208 1.92C0.460208 1.707 0.343209 1.425 0.343209 1.125C0.343209 0.824998 0.460208 0.541497 0.673208 0.329997C0.886208 0.118497 1.16821 -1.55905e-06 1.46821 -1.53283e-06Z"
      fill="#009B85"
    />
  </svg>`,
  styleUrl: './scheme-arrow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchemeArrowComponent {}
