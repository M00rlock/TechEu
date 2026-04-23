import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../core/services/api.service';
import { CartStore } from '../../core/store/cart.store';
import { FormatAmountPipe, PricePipe } from '../../shared/pipes/price.pipe';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, TranslateModule, FormatAmountPipe, PricePipe],
  template: `
    <div class="container page">
      <h1 class="section-title">{{ 'checkout.title' | translate }}</h1>

      @if (!cart.cart().length) {
        <p style="text-align:center;color:#6b7280">
          {{ 'cart.empty' | translate }} <a routerLink="/catalog" style="color:#2563eb">{{ 'cart.continueShopping' | translate }}</a>
        </p>
      } @else {
        <div class="checkout-layout">
          <form [formGroup]="form" (ngSubmit)="submit()" class="checkout-form">
            <div class="form-row">
              <div class="form-group">
                <label>{{ 'checkout.firstName' | translate }}</label>
                <input formControlName="firstName" [class.error]="isInvalid('firstName')" />
              </div>
              <div class="form-group">
                <label>{{ 'checkout.lastName' | translate }}</label>
                <input formControlName="lastName" [class.error]="isInvalid('lastName')" />
              </div>
            </div>
            <div class="form-group">
              <label>{{ 'checkout.email' | translate }}</label>
              <input type="email" formControlName="email" [class.error]="isInvalid('email')" />
            </div>
            <div class="form-group">
              <label>{{ 'checkout.phone' | translate }}</label>
              <input type="tel" formControlName="phone" />
            </div>
            <div class="form-group">
              <label>{{ 'checkout.address' | translate }}</label>
              <input formControlName="address" [class.error]="isInvalid('address')" />
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>{{ 'checkout.city' | translate }}</label>
                <input formControlName="city" [class.error]="isInvalid('city')" />
              </div>
              <div class="form-group">
                <label>{{ 'checkout.postalCode' | translate }}</label>
                <input formControlName="postalCode" [class.error]="isInvalid('postalCode')" />
              </div>
            </div>
            <div class="form-group">
              <label>{{ 'checkout.country' | translate }}</label>
              <select formControlName="country">
                <option value="DE">{{ 'checkout.germany' | translate }}</option>
                <option value="GB">{{ 'checkout.uk' | translate }}</option>
              </select>
            </div>

            <div class="payment-stub">
              <p>💳 {{ 'checkout.paymentStub' | translate }}</p>
            </div>

            @if (error()) { <p class="form-error">{{ error() }}</p> }

            <button type="submit" class="btn btn--primary btn--full btn--lg" [disabled]="submitting()">
              {{ (submitting() ? 'checkout.processing' : 'checkout.placeOrder') | translate }}
            </button>
          </form>

          <div class="order-summary">
            <h2>{{ 'checkout.orderSummary' | translate }}</h2>
            @for (item of cart.cart(); track item.product.id) {
              <div class="summary-item">
                <span>{{ getName(item.product) }} × {{ item.quantity }}</span>
                <span>{{ item.product | price }}</span>
              </div>
            }
            <div class="summary-total">
              <span>{{ 'cart.total' | translate }}</span>
              <span>{{ cart.total() | formatAmount: cart.currency() }}</span>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .checkout-layout { display: grid; gap: 2rem; @media(min-width:1024px){ grid-template-columns: 1fr 360px; } }
    .checkout-form { display: flex; flex-direction: column; gap: 1rem; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .payment-stub {
      background: #fffbeb; border: 1px solid #fde68a; border-radius: 0.75rem; padding: 1rem;
      p { font-size: 0.875rem; color: #92400e; }
    }
    .form-error { color: #ef4444; font-size: 0.875rem; }
    .order-summary {
      background: #f9fafb; border-radius: 1rem; padding: 1.5rem; height: fit-content;
      h2 { font-size: 1.125rem; font-weight: 700; margin-bottom: 1rem; }
    }
    .summary-item { display: flex; justify-content: space-between; font-size: 0.875rem; padding: 0.5rem 0; border-bottom: 1px solid #f0f0f0; }
    .summary-total { display: flex; justify-content: space-between; font-weight: 700; font-size: 1.125rem; padding-top: 1rem; margin-top: 0.5rem; }
  `],
})
export class CheckoutComponent {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);
  private router = inject(Router);
  private translate = inject(TranslateService);
  cart = inject(CartStore);

  submitting = signal(false);
  error = signal('');

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    address: ['', Validators.required],
    city: ['', Validators.required],
    country: ['DE', Validators.required],
    postalCode: ['', Validators.required],
  });

  isInvalid(field: string) {
    const c = this.form.get(field);
    return c?.invalid && c?.touched;
  }

  getName(p: any) {
    return this.translate.currentLang === 'de' ? p.nameDe : p.nameEn;
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.submitting.set(true);
    this.error.set('');
    const v = this.form.value;
    this.api.createOrder({
      email: v.email!,
      firstName: v.firstName!,
      lastName: v.lastName!,
      phone: v.phone || undefined,
      address: v.address!,
      city: v.city!,
      country: v.country!,
      postalCode: v.postalCode!,
      currency: this.cart.currency(),
      items: this.cart.cart().map(i => ({ productId: i.product.id, quantity: i.quantity })),
    }).subscribe({
      next: () => {
        this.cart.clearCart();
        this.router.navigate(['/checkout/success']);
      },
      error: (e) => {
        this.error.set(e?.error?.message || this.translate.instant('common.error'));
        this.submitting.set(false);
      },
    });
  }
}
