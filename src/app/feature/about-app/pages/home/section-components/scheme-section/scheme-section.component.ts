import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SchemeArrowComponent } from './scheme-arrow/scheme-arrow.component';

@Component({
  selector: 'app-scheme-section',
  standalone: true,
  template: `<div class="container">
    <div class="title">
      Stwórz ankietę, zbierz wyniki, <br />
      wyciągnij wnioski, przygotuj raport.
    </div>
    <ul class="scheme">
      <li>
        <img
          loading="lazy"
          decoding="async"
          width="160"
          height="130"
          src="https://www.webankieta.pl/wp-content/uploads/2022/04/steps-1-200x135.png"
          class="attachment-thumbnail size-thumbnail"
          alt="step 1"
          srcset="
            https://www.webankieta.pl/wp-content/uploads/2022/04/steps-1-200x135.png 200w,
            https://www.webankieta.pl/wp-content/uploads/2022/04/steps-1.png         356w
          "
          sizes="(max-width: 200px) 100vw, 200px"
        />
        <div class="text">
          Wykorzystaj nasze przykłady ankiet <br />
          lub stwórz własne badanie od podstaw.
        </div>
      </li>
      <app-scheme-arrow></app-scheme-arrow>
      <li>
        <img
          loading="lazy"
          decoding="async"
          width="160"
          height="130"
          src="https://www.webankieta.pl/wp-content/uploads/2022/04/steps-2-200x167.png"
          class="attachment-thumbnail size-thumbnail"
          alt="step 2"
          srcset="
            https://www.webankieta.pl/wp-content/uploads/2022/04/steps-2-200x167.png 200w,
            https://www.webankieta.pl/wp-content/uploads/2022/04/steps-2.png         288w
          "
          sizes="(max-width: 200px) 100vw, 200px"
        />
        <div class="text">
          Wybierz skórkę ankiety lub stwórz własny branding dodając logo i
          kolorystykę.
        </div>
      </li>
      <app-scheme-arrow></app-scheme-arrow>
      <li>
        <img
          loading="lazy"
          decoding="async"
          width="170"
          height="130"
          src="https://www.webankieta.pl/wp-content/uploads/2022/04/steps-3-200x146.png"
          class="attachment-thumbnail size-thumbnail"
          alt="step 3"
          srcset="
            https://www.webankieta.pl/wp-content/uploads/2022/04/steps-3-200x146.png 200w,
            https://www.webankieta.pl/wp-content/uploads/2022/04/steps-3.png         329w
          "
          sizes="(max-width: 200px) 100vw, 200px"
        />
        <div class="text">
          Wyślij zaproszenia do ankiety jako <br />
          link lub umieść na swojej stronie.
        </div>
      </li>
      <app-scheme-arrow></app-scheme-arrow>
      <li>
        <img
          loading="lazy"
          decoding="async"
          width="170"
          height="130"
          src="https://www.webankieta.pl/wp-content/uploads/2022/04/steps-4-200x143.png"
          class="attachment-thumbnail size-thumbnail"
          alt="step 4"
          srcset="
            https://www.webankieta.pl/wp-content/uploads/2022/04/steps-4-200x143.png 200w,
            https://www.webankieta.pl/wp-content/uploads/2022/04/steps-4.png         336w
          "
        />
        <div class="text">
          Reaguj na ankiety, analizuj wyniki i <br />
          eksportuj raporty — wszystko w jednym narzędziu!
        </div>
      </li>
    </ul>
  </div>`,
  styleUrl: './scheme-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SchemeArrowComponent],
})
export class SchemeSectionComponent {}
