import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-returns',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="container page">
      <h1 class="section-title">{{ 'returns.title' | translate }}</h1>
      <p class="subtitle">{{ 'returns.subtitle' | translate }}</p>

      <div class="returns-cards">
        @for (card of cards; track card.title) {
          <div class="info-card">
            <div class="info-card__icon">{{ card.icon }}</div>
            <h3>{{ card.title | translate }}</h3>
            <p>{{ card.desc | translate }}</p>
          </div>
        }
      </div>

      <div class="steps">
        <h2>{{ 'returns.steps' | translate }}</h2>
        @for (step of steps; track $index) {
          <div class="step">
            <div class="step__num">{{ $index + 1 }}</div>
            <p>{{ step | translate }}</p>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .subtitle { color: #6b7280; margin-bottom: 2rem; font-size: 1.125rem; }
    .returns-cards { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); margin-bottom: 3rem; }
    .info-card { background: #f9fafb; border-radius: 1rem; padding: 1.5rem; }
    .info-card__icon { font-size: 2rem; margin-bottom: 0.75rem; }
    h3 { font-weight: 700; margin-bottom: 0.5rem; }
    p { font-size: 0.875rem; color: #6b7280; }
    .steps h2 { font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem; }
    .step { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem; }
    .step__num {
      width: 2rem; height: 2rem; background: #2563eb; color: #fff;
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 0.875rem; flex-shrink: 0;
    }
    .step p { font-size: 0.9rem; color: #374151; padding-top: 0.25rem; }
  `],
})
export class ReturnsComponent {
  cards = [
    { icon: '🔄', title: 'returns.free', desc: 'returns.freeDesc' },
    { icon: '💰', title: 'returns.refund', desc: 'returns.refundDesc' },
    { icon: '📅', title: 'returns.days', desc: 'returns.daysDesc' },
  ];
  steps = ['returns.step1', 'returns.step2', 'returns.step3', 'returns.step4'];
}
