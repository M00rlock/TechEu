import { Pipe, PipeTransform, inject } from '@angular/core';
import { CartStore } from '../../core/store/cart.store';
import { Product, Currency } from '../../core/models';

@Pipe({ name: 'price', standalone: true, pure: false })
export class PricePipe implements PipeTransform {
  private store = inject(CartStore);

  transform(product: Product, forceCurrency?: Currency): string {
    const currency = forceCurrency ?? this.store.currency();
    const amount = currency === 'EUR' ? Number(product.priceEur) : Number(product.priceGbp);
    return new Intl.NumberFormat(currency === 'EUR' ? 'de-DE' : 'en-GB', {
      style: 'currency', currency, maximumFractionDigits: 0,
    }).format(amount);
  }
}

@Pipe({ name: 'formatAmount', standalone: true })
export class FormatAmountPipe implements PipeTransform {
  transform(amount: number, currency: Currency): string {
    return new Intl.NumberFormat(currency === 'EUR' ? 'de-DE' : 'en-GB', {
      style: 'currency', currency, maximumFractionDigits: 0,
    }).format(amount);
  }
}
