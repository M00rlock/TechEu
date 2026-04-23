import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  template: `
    <div class="container page success">
      <div class="success__icon">✅</div>
      <h1>Order Placed!</h1>
      <p>Thank you for your purchase. You'll receive a confirmation email shortly.</p>
      <a routerLink="/catalog" class="btn btn--primary btn--lg">{{ 'cart.continueShopping' | translate }}</a>
    </div>
  `,
  styles: [`
    .success { text-align: center; padding: 6rem 1rem; }
    .success__icon { font-size: 4rem; margin-bottom: 1rem; }
    h1 { font-size: 2rem; font-weight: 700; margin-bottom: 0.75rem; }
    p { color: #6b7280; margin-bottom: 2rem; }
  `],
})
export class SuccessComponent {}
