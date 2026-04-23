import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Product, ProductsResponse, Category, OrderPayload } from '../models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private base = environment.apiUrl;

  getProducts(params: Record<string, string | number | boolean> = {}) {
    let p = new HttpParams();
    Object.entries(params).forEach(([k, v]) => { if (v !== '' && v !== undefined) p = p.set(k, String(v)); });
    return this.http.get<ProductsResponse>(`${this.base}/products`, { params: p });
  }

  getProduct(slug: string) {
    return this.http.get<Product>(`${this.base}/products/${slug}`);
  }

  getCategories() {
    return this.http.get<Category[]>(`${this.base}/categories`);
  }

  getBrands() {
    return this.http.get<string[]>(`${this.base}/products/brands`);
  }

  createOrder(payload: OrderPayload) {
    return this.http.post<{ id: number }>(`${this.base}/orders`, payload);
  }
}
