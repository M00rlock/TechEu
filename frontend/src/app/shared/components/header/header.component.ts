import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CartStore } from '../../../core/store/cart.store';
import { Currency } from '../../../core/models';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule, NgClass],
  template: `
    <header class="header">
      <div class="header__inner">
        <a routerLink="/" class="header__logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
          TechStore<span>EU</span>
        </a>

        <nav class="header__nav">
          <a routerLink="/catalog" routerLinkActive="active">{{ 'nav.catalog' | translate }}</a>
          <a routerLink="/about" routerLinkActive="active">{{ 'nav.about' | translate }}</a>
          <a routerLink="/shipping" routerLinkActive="active">{{ 'nav.shipping' | translate }}</a>
          <a routerLink="/returns" routerLinkActive="active">{{ 'nav.returns' | translate }}</a>
          <a routerLink="/contacts" routerLinkActive="active">{{ 'nav.contacts' | translate }}</a>
          <a routerLink="/faq" routerLinkActive="active">{{ 'nav.faq' | translate }}</a>
        </nav>

        <div class="header__actions">
          <div class="toggle">
            @for (c of currencies; track c) {
              <button [ngClass]="{ active: store.currency() === c }" (click)="store.setCurrency(c)">
                {{ c === 'EUR' ? '€ EUR' : '£ GBP' }}
              </button>
            }
          </div>
          <div class="toggle">
            @for (l of langs; track l) {
              <button [ngClass]="{ active: currentLang() === l }" (click)="switchLang(l)">
                {{ l.toUpperCase() }}
              </button>
            }
          </div>
          <a routerLink="/cart" class="cart-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            @if (store.count() > 0) {
              <span class="badge">{{ store.count() }}</span>
            }
          </a>
          <button class="menu-btn" (click)="menuOpen.set(!menuOpen())">
            @if (menuOpen()) {
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
            } @else {
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h16M4 12h16M4 19h16"/></svg>
            }
          </button>
        </div>
      </div>

      @if (menuOpen()) {
        <div class="header__mobile">
          <a routerLink="/catalog" (click)="menuOpen.set(false)">{{ 'nav.catalog' | translate }}</a>
          <a routerLink="/about" (click)="menuOpen.set(false)">{{ 'nav.about' | translate }}</a>
          <a routerLink="/shipping" (click)="menuOpen.set(false)">{{ 'nav.shipping' | translate }}</a>
          <a routerLink="/returns" (click)="menuOpen.set(false)">{{ 'nav.returns' | translate }}</a>
          <a routerLink="/contacts" (click)="menuOpen.set(false)">{{ 'nav.contacts' | translate }}</a>
          <a routerLink="/faq" (click)="menuOpen.set(false)">{{ 'nav.faq' | translate }}</a>
          <div class="mobile-toggles">
            <div class="toggle">
              @for (c of currencies; track c) {
                <button [ngClass]="{ active: store.currency() === c }" (click)="store.setCurrency(c)">{{ c === 'EUR' ? '€ EUR' : '£ GBP' }}</button>
              }
            </div>
            <div class="toggle">
              @for (l of langs; track l) {
                <button [ngClass]="{ active: currentLang() === l }" (click)="switchLang(l)">{{ l.toUpperCase() }}</button>
              }
            </div>
          </div>
        </div>
      }
    </header>
  `,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  store = inject(CartStore);
  private translate = inject(TranslateService);

  currencies: Currency[] = ['EUR', 'GBP'];
  langs = ['en', 'de'];
  menuOpen = signal(false);
  currentLang = signal(this.translate.currentLang || 'en');

  switchLang(lang: string) {
    this.translate.use(lang);
    this.currentLang.set(lang);
    if (typeof localStorage !== 'undefined') localStorage.setItem('lang', lang);
  }
}
