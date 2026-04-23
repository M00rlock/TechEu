import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  template: `
    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brand">
          <span class="footer__logo">⚡ TechStore<span>EU</span></span>
          <p>Premium tech for Germany & UK</p>
        </div>
        <nav class="footer__nav">
          <a routerLink="/catalog">{{ 'nav.catalog' | translate }}</a>
          <a routerLink="/about">{{ 'nav.about' | translate }}</a>
          <a routerLink="/shipping">{{ 'nav.shipping' | translate }}</a>
          <a routerLink="/returns">{{ 'nav.returns' | translate }}</a>
          <a routerLink="/contacts">{{ 'nav.contacts' | translate }}</a>
          <a routerLink="/faq">{{ 'nav.faq' | translate }}</a>
        </nav>
      </div>
      <div class="footer__bottom container">
        <span>© 2025 TechStoreEU. All rights reserved.</span>
        <span>🇩🇪 Germany · 🇬🇧 United Kingdom</span>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #111827;
      color: #9ca3af;
      font-size: 0.875rem;
      margin-top: auto;
    }
    .footer__inner {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: space-between;
      padding-top: 2.5rem;
      padding-bottom: 2rem;
    }
    .footer__logo {
      font-weight: 700;
      font-size: 1.125rem;
      color: #fff;
      span { color: #3b82f6; }
    }
    .footer__brand p { margin-top: 0.5rem; font-size: 0.8rem; }
    .footer__nav {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem 2rem;
      a { color: #9ca3af; transition: color 0.2s; &:hover { color: #fff; } }
    }
    .footer__bottom {
      border-top: 1px solid #1f2937;
      padding-top: 1rem;
      padding-bottom: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: space-between;
    }
  `],
})
export class FooterComponent {}
