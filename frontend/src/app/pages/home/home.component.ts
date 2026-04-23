import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../core/services/api.service';
import { Product } from '../../core/models';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

const REVIEWS = [
  { name: 'Marcus W.', country: '🇩🇪', text: 'Ordered an RTX 4080 — arrived in 2 days. Packaging was perfect!', rating: 5 },
  { name: 'James T.', country: '🇬🇧', text: 'Best price for the ROG Zephyrus. Fast UK delivery and great support.', rating: 5 },
  { name: 'Lukas B.', country: '🇩🇪', text: 'Returned a monitor without any issues. Got my refund in 3 days.', rating: 5 },
  { name: 'Sophie M.', country: '🇬🇧', text: 'Amazing selection of GPUs. The currency switcher is super handy!', rating: 5 },
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslateModule, ProductCardComponent],
  template: `
    <!-- Hero -->
    <section class="hero">
      <div class="container hero__content">
        <div class="hero__badge">⚡ {{ 'hero.badge' | translate }}</div>
        <h1>{{ 'hero.title' | translate }}<br /><span>{{ 'hero.titleAccent' | translate }}</span></h1>
        <p>{{ 'hero.subtitle' | translate }}</p>
        <div class="hero__ctas">
          <a routerLink="/catalog" class="btn btn--primary btn--lg">{{ 'hero.cta' | translate }}</a>
          <a routerLink="/catalog" class="btn btn--outline btn--lg">{{ 'hero.ctaSecondary' | translate }}</a>
        </div>
        <div class="hero__tags">
          @for (tag of heroTags; track tag) { <span>{{ tag }}</span> }
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="container page">
      <h2 class="section-title text-center">{{ 'features.title' | translate }}</h2>
      <div class="grid-4">
        @for (item of featureItems; track $index) {
          <div class="feature-card">
            <div class="feature-card__icon">{{ featureEmojis[$index] }}</div>
            <p class="feature-card__title">{{ item.title }}</p>
            <p class="feature-card__desc">{{ item.desc }}</p>
          </div>
        }
      </div>
    </section>

    <!-- Featured Products -->
    @if (featured().length) {
      <section class="container" style="padding-bottom: 3rem">
        <div class="section-header">
          <h2 class="section-title" style="margin-bottom:0">Featured Products</h2>
          <a routerLink="/catalog" class="link-more">View all →</a>
        </div>
        <div class="grid-4" style="margin-top:1.5rem">
          @for (p of featured(); track p.id) {
            <app-product-card [product]="p" />
          }
        </div>
      </section>
    }

    <!-- Returns Banner -->
    <section class="returns-banner">
      <div class="container returns-banner__inner">
        <div>
          <h2>{{ 'returns.days' | translate }}</h2>
          <p>{{ 'returns.daysDesc' | translate }}</p>
        </div>
        <div class="returns-banner__pills">
          <span>🔄 {{ 'returns.free' | translate }}</span>
          <span>💰 {{ 'returns.refund' | translate }}</span>
        </div>
        <a routerLink="/returns" class="btn btn--primary">{{ 'common.learnMore' | translate }}</a>
      </div>
    </section>

    <!-- Reviews -->
    <section class="container page">
      <h2 class="section-title text-center">{{ 'reviews.title' | translate }}</h2>
      <div class="grid-4">
        @for (r of reviews; track r.name) {
          <div class="review-card">
            <div class="review-card__stars">{{ '★'.repeat(r.rating) }}</div>
            <p>"{{ r.text }}"</p>
            <span>{{ r.country }} {{ r.name }}</span>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0c1a3a 100%);
      color: #fff;
      padding: 5rem 0;
    }
    .hero__content {
      h1 { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; line-height: 1.15; margin: 1rem 0; span { color: #60a5fa; } }
      p { color: #94a3b8; font-size: 1.125rem; max-width: 36rem; margin-bottom: 2rem; }
    }
    .hero__badge {
      display: inline-block;
      background: rgba(59,130,246,0.15);
      border: 1px solid rgba(59,130,246,0.3);
      color: #93c5fd;
      font-size: 0.8rem;
      font-weight: 600;
      padding: 0.35rem 0.875rem;
      border-radius: 9999px;
    }
    .hero__ctas { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 2rem; }
    .hero__tags { display: flex; flex-wrap: wrap; gap: 1.5rem; font-size: 0.875rem; color: #64748b; }
    .text-center { text-align: center; }
    .feature-card {
      background: #f9fafb;
      border-radius: 1rem;
      padding: 1.5rem;
      text-align: center;
      transition: background 0.2s;
      &:hover { background: #eff6ff; }
    }
    .feature-card__icon { font-size: 2rem; margin-bottom: 0.75rem; }
    .feature-card__title { font-weight: 600; font-size: 0.9rem; margin-bottom: 0.25rem; }
    .feature-card__desc { font-size: 0.8rem; color: #6b7280; }
    .section-header { display: flex; align-items: center; justify-content: space-between; }
    .link-more { font-size: 0.875rem; font-weight: 600; color: #2563eb; &:hover { text-decoration: underline; } }
    .returns-banner {
      background: linear-gradient(90deg, #2563eb, #1d4ed8);
      color: #fff;
      padding: 3rem 0;
    }
    .returns-banner__inner {
      display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1.5rem;
      h2 { font-size: 1.5rem; font-weight: 700; }
      p { color: #bfdbfe; margin-top: 0.25rem; }
    }
    .returns-banner__pills { display: flex; flex-wrap: wrap; gap: 0.75rem; }
    .returns-banner__pills span {
      background: rgba(255,255,255,0.15);
      padding: 0.5rem 1rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
    }
    .review-card {
      background: #f9fafb;
      border-radius: 1rem;
      padding: 1.25rem;
      p { font-size: 0.875rem; color: #374151; margin: 0.75rem 0; line-height: 1.6; }
      span { font-size: 0.8rem; font-weight: 600; color: #111; }
    }
    .review-card__stars { color: #f59e0b; font-size: 1rem; letter-spacing: 0.1em; }
  `],
})
export class HomeComponent implements OnInit {
  private api = inject(ApiService);
  private translate = inject(TranslateService);

  featured = signal<Product[]>([]);
  reviews = REVIEWS;
  heroTags = ['🇩🇪 Germany', '🇬🇧 United Kingdom', '✅ 30-Day Returns', '🔒 Secure Checkout'];
  featureEmojis = ['🚚', '🔄', '🔒', '🎧'];

  get featureItems(): { title: string; desc: string }[] {
    return this.translate.instant('features.items') || [];
  }

  ngOnInit() {
    this.api.getProducts({ featured: true, limit: 4 }).subscribe({
      next: (res) => this.featured.set(res.items),
    });
  }
}
