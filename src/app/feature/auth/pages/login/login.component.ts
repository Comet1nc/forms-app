import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: ` <div class="form-container">
    <input placeholder="E-mail:" type="text" />
    <input placeholder="Password: " type="text" />
    <div class="remember-me">
      <input class="checkbox" type="checkbox" name="remember-me" />
      <span>Remember me</span>
    </div>
    <a class="submit" href="#">Login</a>
  </div>`,
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class LoginComponent {}
