import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="form-container">
      <input type="text" />
      <input type="text" />
      <div class="remember-me">
        <input type="checkbox" name="remember-me" />
        <span>Remember Me</span>
      </div>
      <a href="#">Register</a>
    </div>
  `,
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {}
