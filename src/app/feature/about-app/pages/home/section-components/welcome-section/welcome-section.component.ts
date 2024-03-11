import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="container">
    <div class="left">
      <h1 class="title">
        Ankiety online, <br />
        formularze, testy <br />
        i dużo więcej
      </h1>
      <p class="sub-title">
        Wybierz Webankietę do pozyskiwania feedbacku i opinii od <br />
        swoich klientów, pracowników i użytkowników.
      </p>
      <a class="login-btn">
        <span> Rozpocznij już teraz! </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.61111 9.03233L0.940412 14.7635C0.329433 15.381 0.329433 16.3753 0.940412 16.9928L0.968876 17.0216C1.58447 17.6437 2.58787 17.6491 3.21003 17.0335C3.21402 17.0295 3.21798 17.0256 3.22193 17.0216L10.0239 10.147C10.6349 9.52946 10.6349 8.53519 10.0239 7.9177L3.22193 1.04309C2.60633 0.420921 1.60294 0.415588 0.980771 1.03118C0.976785 1.03513 0.97282 1.0391 0.968876 1.04309L0.940412 1.07185C0.329433 1.68935 0.329433 2.68361 0.940412 3.30111L6.61111 9.03233Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
    <div class="right">
      <div class="image-wrapper">
        <img
          width="736"
          height="440"
          src="../../../../../assets/home-title-image.webp"
          alt=""
        />
      </div>
    </div>
  </div>`,
  styleUrl: './welcome-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeSectionComponent {}
