import { Injectable, signal, computed } from '@angular/core';
import { CartItem, Currency, Product } from '../models';

@Injectable({ providedIn: 'root' })
export class CartStore {
  private _cart = signal<CartItem[]>([]);
  private _currency = signal<Currency>('EUR');

  cart = this._cart.asReadonly();
  currency = this._currency.asReadonly();

  count = computed(() => this._cart().reduce((s, i) => s + i.quantity, 0));
  total = computed(() => this._cart().reduce((s, i) => {
    const price = this._currency() === 'EUR' ? Number(i.product.priceEur) : Number(i.product.priceGbp);
    return s + price * i.quantity;
  }, 0));

  setCurrency(c: Currency) { this._currency.set(c); }

  addToCart(product: Product) {
    const cart = this._cart();
    const idx = cart.findIndex(i => i.product.id === product.id);
    if (idx >= 0) {
      this._cart.update(c => c.map((i, j) => j === idx ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      this._cart.update(c => [...c, { product, quantity: 1 }]);
    }
  }

  removeFromCart(id: number) {
    this._cart.update(c => c.filter(i => i.product.id !== id));
  }

  updateQty(id: number, qty: number) {
    if (qty < 1) { this.removeFromCart(id); return; }
    this._cart.update(c => c.map(i => i.product.id === id ? { ...i, quantity: qty } : i));
  }

  clearCart() { this._cart.set([]); }
}
