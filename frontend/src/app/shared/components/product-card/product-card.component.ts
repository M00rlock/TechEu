import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Product } from '../../../core/models';
import { CartStore } from '../../../core/store/cart.store';
import { PricePipe } from '../../pipes/price.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, TranslateModule, PricePipe],
  template: `
    <div class="product-card">
      <a [routerLink]="['/product', product.slug]" class="product-card__img">
        @if (product.images.length) {
          <img [src]="product.images[0]" [alt]="name" loading="lazy" />
        } @else {
          <div class="product-card__placeholder">📦</div>
        }
        @if (product.isOnSale && product.salePercent) {
          <span class="badge-sale">-{{ product.salePercent }}%</span>
        }
      </a>
      <div class="product-card__body">
        <p class="product-card__brand">{{ product.brand }}</p>
        <a [routerLink]="['/product', product.slug]" class="product-card__name">{{ name }}</a>
        <div class="product-card__footer">
          <span class="product-card__price">{{ product | price }}</span>
          <button class="btn btn--primary" (click)="add()" [disabled]="product.stock === 0">
            {{ (product.stock > 0 ? 'catalog.addToCart' : 'catalog.outOfStock') | translate }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-card {
      border: 1px solid #f0f0f0;
      border-radius: 1rem;
      overflow: hidden;
      transition: box-shadow 0.2s;
      background: #fff;
      &:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
    }
    .product-card__img {
      position: relative;
      display: block;
      aspect-ratio: 1;
      background: #f9fafb;
      img { width: 100%; height: 100%; object-fit: contain; padding: 1rem; }
      .badge-sale { position: absolute; top: 0.5rem; left: 0.5rem; }
    }
    .product-card__placeholder {
      display: flex; align-items: center; justify-content: center;
      height: 100%; font-size: 3rem;
    }
    .product-card__body { padding: 0.875rem; }
    .product-card__brand { font-size: 0.75rem; color: #6b7280; margin-bottom: 0.25rem; }
    .product-card__name {
      font-size: 0.875rem; font-weight: 600; color: #111;
      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
      margin-bottom: 0.75rem;
      &:hover { color: #2563eb; }
    }
    .product-card__footer { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap; }
    .product-card__price { font-size: 1rem; font-weight: 700; color: #111; }
    .btn { font-size: 0.75rem; padding: 0.4rem 0.75rem; }
  `],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  private cart = inject(CartStore);
  private translate = inject(TranslateService);

  get name() {
    return this.translate.currentLang === 'de' ? this.product.nameDe : this.product.nameEn;
  }

  add() { this.cart.addToCart(this.product); }
}
