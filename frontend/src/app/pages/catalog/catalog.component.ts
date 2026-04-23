import { Component, inject, signal, computed, OnInit, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../core/services/api.service';
import { Category, Product } from '../../core/models';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [FormsModule, TranslateModule, ProductCardComponent],
  template: `
    <div class="container page">
      <h1 class="section-title">{{ 'catalog.title' | translate }}</h1>
      <div class="catalog">
        <!-- Sidebar -->
        <aside class="catalog__sidebar" [class.open]="filtersOpen()">
          <div class="filter-group">
            <label>{{ 'catalog.search' | translate }}</label>
            <input type="text" [(ngModel)]="search" (ngModelChange)="onFilter()" [placeholder]="'catalog.search' | translate" />
          </div>
          <div class="filter-group">
            <label>{{ 'catalog.category' | translate }}</label>
            <select [(ngModel)]="categorySlug" (ngModelChange)="onFilter()">
              <option value="">{{ 'catalog.all' | translate }}</option>
              @for (c of categories(); track c.id) {
                <option [value]="c.slug">{{ lang() === 'de' ? c.nameDe : c.nameEn }}</option>
              }
            </select>
          </div>
          <div class="filter-group">
            <label>{{ 'catalog.brand' | translate }}</label>
            <select [(ngModel)]="brand" (ngModelChange)="onFilter()">
              <option value="">{{ 'catalog.all' | translate }}</option>
              @for (b of brands(); track b) { <option [value]="b">{{ b }}</option> }
            </select>
          </div>
          <div class="filter-group">
            <label>{{ 'catalog.price' | translate }} (max)</label>
            <input type="number" [(ngModel)]="maxPrice" (ngModelChange)="onFilter()" min="0" />
          </div>
          <div class="filter-group">
            <label class="checkbox-label">
              <input type="checkbox" [(ngModel)]="onSale" (ngModelChange)="onFilter()" />
              {{ 'catalog.sale' | translate }}
            </label>
          </div>
          <button class="btn btn--outline btn--full" (click)="resetFilters()">Reset</button>
        </aside>

        <!-- Main -->
        <div class="catalog__main">
          <div class="catalog__toolbar">
            <span class="catalog__count">{{ total() }} {{ 'catalog.products' | translate }}</span>
            <button class="btn btn--outline filter-toggle" (click)="filtersOpen.set(!filtersOpen())">
              ☰ {{ 'catalog.filters' | translate }}
            </button>
          </div>

          @if (loading()) {
            <div class="catalog__loading">{{ 'common.loading' | translate }}</div>
          } @else if (!products().length) {
            <div class="catalog__empty">{{ 'catalog.noResults' | translate }}</div>
          } @else {
            <div class="grid-4">
              @for (p of products(); track p.id) {
                <app-product-card [product]="p" />
              }
            </div>
            @if (pages() > 1) {
              <div class="pagination">
                @for (p of pageRange(); track p) {
                  <button [class.active]="p === page()" (click)="goPage(p)">{{ p }}</button>
                }
              </div>
            }
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .catalog { display: grid; grid-template-columns: 1fr; gap: 2rem; @media(min-width:1024px){ grid-template-columns: 240px 1fr; } }
    .catalog__sidebar {
      display: none;
      flex-direction: column;
      gap: 1.25rem;
      @media(min-width:1024px){ display: flex; }
      &.open { display: flex; }
    }
    .filter-group {
      display: flex; flex-direction: column; gap: 0.375rem;
      label { font-size: 0.8rem; font-weight: 600; color: #374151; text-transform: uppercase; letter-spacing: 0.05em; }
      input, select { padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.875rem; font-family: inherit; &:focus { outline: none; border-color: #2563eb; } }
    }
    .checkbox-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem !important; text-transform: none !important; letter-spacing: 0 !important; cursor: pointer; }
    .catalog__toolbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; }
    .catalog__count { font-size: 0.875rem; color: #6b7280; }
    .filter-toggle { @media(min-width:1024px){ display: none; } }
    .catalog__loading, .catalog__empty { text-align: center; padding: 4rem; color: #6b7280; }
    .pagination { display: flex; gap: 0.5rem; justify-content: center; margin-top: 2rem; flex-wrap: wrap; }
    .pagination button {
      width: 2.25rem; height: 2.25rem; border-radius: 0.5rem; border: 1px solid #d1d5db;
      background: #fff; font-size: 0.875rem; cursor: pointer; transition: all 0.2s;
      &:hover { border-color: #2563eb; color: #2563eb; }
      &.active { background: #2563eb; color: #fff; border-color: #2563eb; }
    }
  `],
})
export class CatalogComponent implements OnInit {
  private api = inject(ApiService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private translate = inject(TranslateService);

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  brands = signal<string[]>([]);
  total = signal(0);
  page = signal(1);
  pages = signal(1);
  loading = signal(false);
  filtersOpen = signal(false);

  search = '';
  categorySlug = '';
  brand = '';
  maxPrice = '';
  onSale = false;

  lang = signal(this.translate.currentLang || 'en');

  pageRange = computed(() => Array.from({ length: this.pages() }, (_, i) => i + 1));

  ngOnInit() {
    const q = this.route.snapshot.queryParams;
    this.categorySlug = q['category'] || '';
    this.brand = q['brand'] || '';
    this.search = q['search'] || '';
    this.page.set(Number(q['page']) || 1);

    this.translate.onLangChange.subscribe(e => this.lang.set(e.lang));
    this.api.getCategories().subscribe(c => this.categories.set(c));
    this.api.getBrands().subscribe(b => this.brands.set(b));
    this.load();
  }

  onFilter() { this.page.set(1); this.load(); }
  goPage(p: number) { this.page.set(p); this.load(); }

  resetFilters() {
    this.search = ''; this.categorySlug = ''; this.brand = ''; this.maxPrice = ''; this.onSale = false;
    this.page.set(1); this.load();
  }

  load() {
    this.loading.set(true);
    const params: Record<string, string | number | boolean> = { page: this.page(), limit: 12 };
    if (this.search) params['search'] = this.search;
    if (this.categorySlug) params['category'] = this.categorySlug;
    if (this.brand) params['brand'] = this.brand;
    if (this.maxPrice) params['maxPrice'] = this.maxPrice;
    if (this.onSale) params['onSale'] = true;

    this.api.getProducts(params).subscribe({
      next: (res) => {
        this.products.set(res.items);
        this.total.set(res.total);
        this.pages.set(res.pages);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }
}
