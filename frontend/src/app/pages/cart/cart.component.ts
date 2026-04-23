import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CartStore } from '../../core/store/cart.store';
import { PricePipe, FormatAmountPipe } from '../../shared/pipes/price.pipe';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, TranslateModule, PricePipe, FormatAmountPipe],
  template: `
    <div class="container page">
      <h1 class="section-title">{{ 'cart.title' | translate }}</h1>

      @if (!cart.cart().length) {
        <div class="cart-empty">
          <p>🛒 {{ 'cart.empty' | translate }}</p>
          <a routerLink="/catalog" class="btn btn--primary">{{ 'cart.continueShopping' | translate }}</a>
        </div>
      } @else {
        <div class="cart-layout">
          <div class="cart-items">
            @for (item of cart.cart(); track item.product.id) {
              <div class="cart-item">
                <div class="cart-item__img">
                  @if (item.product.images.length) {
                    <img [src]="item.product.images[0]" [alt]="getName(item.product)" />
                  } @else { <span>📦</span> }
                </div>
                <div class="cart-item__info">
                  <p class="cart-item__brand">{{ item.product.brand }}</p>
                  <a [routerLink]="['/product', item.product.slug]" class="cart-item__name">{{ getName(item.product) }}</a>
                  <p class="cart-item__price">{{ item.product | price }}</p>
                </div>
                <div class="cart-item__controls">
                  <div class="qty-control">
                    <button (click)="cart.updateQty(item.product.id, item.quantity - 1)">−</button>
                    <span>{{ item.quantity }}</span>
                    <button (click)="cart.updateQty(item.product.id, item.quantity + 1)">+</button>
                  </div>
                  <button class="remove-btn" (click)="cart.removeFromCart(item.product.id)">✕</button>
                </div>
              </div>
            }
          </div>

          <div class="cart-summary">
            <h2>{{ 'cart.total' | translate }}</h2>
            <div class="cart-summary__total">{{ cart.total() | formatAmount: cart.currency() }}</div>
            <a routerLink="/checkout" class="btn btn--primary btn--full btn--lg" style="margin-top:1rem">
              {{ 'cart.checkout' | translate }}
            </a>
            <a routerLink="/catalog" class="btn btn--outline btn--full" style="margin-top:0.75rem">
              {{ 'cart.continueShopping' | translate }}
            </a>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .cart-empty { text-align: center; padding: 4rem; p { font-size: 1.25rem; color: #6b7280; margin-bottom: 1.5rem; } }
    .cart-layout { display: grid; gap: 2rem; @media(min-width:1024px){ grid-template-columns: 1fr 320px; } }
    .cart-items { display: flex; flex-direction: column; gap: 1rem; }
    .cart-item {
      display: flex; align-items: center; gap: 1rem; padding: 1rem;
      border: 1px solid #f0f0f0; border-radius: 1rem; background: #fff;
    }
    .cart-item__img {
      width: 80px; height: 80px; flex-shrink: 0; background: #f9fafb; border-radius: 0.5rem;
      display: flex; align-items: center; justify-content: center; overflow: hidden;
      img { width: 100%; height: 100%; object-fit: contain; padding: 0.5rem; }
      span { font-size: 2rem; }
    }
    .cart-item__info { flex: 1; min-width: 0; }
    .cart-item__brand { font-size: 0.75rem; color: #6b7280; }
    .cart-item__name { font-size: 0.875rem; font-weight: 600; color: #111; display: block; margin: 0.25rem 0; &:hover { color: #2563eb; } }
    .cart-item__price { font-size: 0.875rem; font-weight: 700; }
    .cart-item__controls { display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem; }
    .qty-control {
      display: flex; align-items: center; border: 1px solid #d1d5db; border-radius: 0.5rem; overflow: hidden;
      button { width: 2rem; height: 2rem; border: none; background: #f9fafb; cursor: pointer; font-size: 1rem; &:hover { background: #e5e7eb; } }
      span { width: 2.5rem; text-align: center; font-size: 0.875rem; font-weight: 600; }
    }
    .remove-btn { border: none; background: none; color: #9ca3af; cursor: pointer; font-size: 1rem; &:hover { color: #ef4444; } }
    .cart-summary {
      background: #f9fafb; border-radius: 1rem; padding: 1.5rem; height: fit-content;
      h2 { font-size: 1.125rem; font-weight: 700; margin-bottom: 1rem; }
    }
    .cart-summary__total { font-size: 2rem; font-weight: 800; }
  `],
})
export class CartComponent {
  cart = inject(CartStore);
  private translate = inject(TranslateService);

  getName(p: any) {
    return this.translate.currentLang === 'de' ? p.nameDe : p.nameEn;
  }
}
