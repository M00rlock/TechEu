import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-neck',
  standalone: true,
  imports: [TranslateModule],
  template: `
    @if (visible()) {
      <div class="neck">
        <span>{{ 'neck.message' | translate }}</span>
        <button class="neck__close" (click)="visible.set(false)" aria-label="Close">✕</button>
      </div>
    }
  `,
  styles: [`
    .neck {
      background: #2563eb;
      color: #fff;
      font-size: 0.8125rem;
      font-weight: 500;
      text-align: center;
      padding: 0.5rem 2.5rem;
      position: relative;
    }
    .neck__close {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
      font-size: 0.75rem;
      opacity: 0.7;
      &:hover { opacity: 1; }
    }
  `],
})
export class NeckComponent {
  visible = signal(true);
}
