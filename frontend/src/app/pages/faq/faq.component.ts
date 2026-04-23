import { Component, inject, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="container page">
      <h1 class="section-title">{{ 'faq.title' | translate }}</h1>
      <div class="faq-list">
        @for (item of faqItems; track $index) {
          <div class="faq-item" [class.open]="openIdx() === $index">
            <button class="faq-item__q" (click)="toggle($index)">
              <span>{{ item.q }}</span>
              <span class="faq-item__arrow">{{ openIdx() === $index ? '−' : '+' }}</span>
            </button>
            @if (openIdx() === $index) {
              <div class="faq-item__a">{{ item.a }}</div>
            }
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .faq-list { max-width: 720px; display: flex; flex-direction: column; gap: 0.75rem; }
    .faq-item { border: 1px solid #e5e7eb; border-radius: 0.75rem; overflow: hidden; &.open { border-color: #2563eb; } }
    .faq-item__q {
      width: 100%; display: flex; justify-content: space-between; align-items: center;
      padding: 1rem 1.25rem; background: #fff; border: none; cursor: pointer;
      font-size: 0.9rem; font-weight: 600; text-align: left; gap: 1rem;
      &:hover { background: #f9fafb; }
    }
    .faq-item__arrow { font-size: 1.25rem; color: #2563eb; flex-shrink: 0; }
    .faq-item__a { padding: 0 1.25rem 1rem; font-size: 0.875rem; color: #374151; line-height: 1.7; }
  `],
})
export class FaqComponent {
  private translate = inject(TranslateService);
  openIdx = signal<number | null>(null);

  get faqItems(): { q: string; a: string }[] {
    return this.translate.instant('faq.items') || [];
  }

  toggle(i: number) {
    this.openIdx.set(this.openIdx() === i ? null : i);
  }
}
