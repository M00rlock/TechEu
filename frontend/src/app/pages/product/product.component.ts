import { Component, inject, signal, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../core/services/api.service';
import { CartStore } from '../../core/store/cart.store';
import { Product } from '../../core/models';
import { PricePipe } from '../../shared/pipes/price.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, TranslateModule, PricePipe],
  template: `
    <div class="container page">
      <a routerLink="/catalog" class="back-link">← {{ 'product.backToCatalog' | translate }}</a>

      @if (loading()) {
        <p style="text-align:center;padding:4rem;color:#6b7280">{{ 'common.loading' | translate }}</p>
      } @else if (product()) {
        <div class="product">
          <!-- Gallery -->
          <div class="product__gallery">
            <div class="product__main-img">
              @if (product()!.images.length) {
                <img [src]="product()!.images[activeImg()]" [alt]="name" />
              } @else {
                <div class="product__no-img">📦</div>
              }
            </div>
            @if ((product()!.images.length ?? 0) > 1) {
              <div class="product__thumbs">
                @for (img of product()!.images; track $index) {
                  <button [class.active]="activeImg() === $index" (click)="activeImg.set($index)">
                    <img [src]="img" [alt]="name" />
                  </button>
                }
              </div>
            }
          </div>

          <!-- Info -->
          <div class="product__info">
            <p class="product__brand">{{ product()!.brand }}</p>
            <h1>{{ name }}</h1>
            <div class="product__price">{{ product()! | price }}</div>
            <p class="product__stock" [class.out]="product()!.stock === 0">
              {{ (product()!.stock > 0 ? 'product.inStock' : 'product.outOfStock') | translate }}
              @if (product()!.stock > 0) { · {{ product()!.stock }} left }
            </p>

            @if (product()!.isOnSale && product()!.salePercent) {
              <span class="badge-sale" style="font-size:0.875rem;padding:0.25rem 0.75rem">
                SALE -{{ product()!.salePercent }}%
              </span>
            }

            <div class="product__actions">
              <div class="qty-control">
                <button (click)="decQty()">−</button>
                <span>{{ qty }}</span>
                <button (click)="incQty()">+</button>
              </div>
              <button class="btn btn--primary btn--lg" (click)="addToCart()" [disabled]="product()!.stock === 0">
                {{ 'product.addToCart' | translate }}
              </button>
            </div>

            <!-- Specs -->
            @if (specs.length) {
              <div class="product__specs">
                <h3>{{ 'product.specs' | translate }}</h3>
                <table>
                  @for (s of specs; track s.key) {
                    <tr><td>{{ s.key }}</td><td>{{ s.value }}</td></tr>
                  }
                </table>
              </div>
            }

            <!-- Description -->
            @if (description) {
              <div class="product__desc">
                <h3>{{ 'product.description' | translate }}</h3>
                <p>{{ description }}</p>
              </div>
            }
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .back-link { font-size: 0.875rem; color: #6b7280; display: inline-block; margin-bottom: 1.5rem; &:hover { color: #2563eb; } }
    .product { display: grid; gap: 3rem; @media(min-width:768px){ grid-template-columns: 1fr 1fr; } }
    .product__main-img {
      background: #f9fafb; border-radius: 1rem; aspect-ratio: 1; overflow: hidden;
      img { width: 100%; height: 100%; object-fit: contain; padding: 2rem; }
    }
    .product__no-img { display: flex; align-items: center; justify-content: center; height: 100%; font-size: 5rem; }
    .product__thumbs { display: flex; gap: 0.5rem; margin-top: 0.75rem; flex-wrap: wrap; }
    .product__thumbs button {
      width: 64px; height: 64px; border: 2px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; background: #f9fafb; cursor: pointer; padding: 0;
      img { width: 100%; height: 100%; object-fit: contain; padding: 0.25rem; }
      &.active { border-color: #2563eb; }
    }
    .product__brand { font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; }
    .product__price { font-size: 2rem; font-weight: 800; color: #111; margin-bottom: 0.75rem; }
    .product__stock { font-size: 0.875rem; color: #16a34a; margin-bottom: 1rem; &.out { color: #ef4444; } }
    .product__actions { display: flex; align-items: center; gap: 1rem; margin: 1.5rem 0; flex-wrap: wrap; }
    .qty-control {
      display: flex; align-items: center; gap: 0; border: 1px solid #d1d5db; border-radius: 0.5rem; overflow: hidden;
      button { width: 2.5rem; height: 2.5rem; border: none; background: #f9fafb; font-size: 1.25rem; cursor: pointer; &:hover { background: #e5e7eb; } }
      span { width: 3rem; text-align: center; font-weight: 600; }
    }
    .product__specs {
      margin-top: 1.5rem;
      h3 { font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; }
      table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
      td { padding: 0.5rem 0.75rem; border-bottom: 1px solid #f0f0f0; &:first-child { color: #6b7280; width: 45%; } }
    }
    .product__desc {
      margin-top: 1.5rem;
      h3 { font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; }
      p { font-size: 0.9rem; color: #374151; line-height: 1.7; }
    }
  `],
})
export class ProductComponent implements OnInit {
  @Input() slug!: string;
  private api = inject(ApiService);
  private cart = inject(CartStore);
  private translate = inject(TranslateService);

  product = signal<Product | null>(null);
  loading = signal(true);
  activeImg = signal(0);
  qty = 1;

  get name() {
    const p = this.product();
    if (!p) return '';
    return this.translate.currentLang === 'de' ? p.nameDe : p.nameEn;
  }

  get description() {
    const p = this.product();
    if (!p) return '';
    return this.translate.currentLang === 'de' ? p.descriptionDe : p.descriptionEn;
  }

  get specs() {
    const s = this.product()!.specs;
    if (!s) return [];
    return Object.entries(s).map(([key, value]) => ({ key, value }));
  }

  ngOnInit() {
    this.api.getProduct(this.slug).subscribe({
      next: (p) => { this.product.set(p); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  decQty() { if (this.qty > 1) this.qty--; }
  incQty() { this.qty++; }

  addToCart() {
    const p = this.product();
    if (!p) return;
    for (let i = 0; i < this.qty; i++) this.cart.addToCart(p);
  }
}
