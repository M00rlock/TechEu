import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="container page">
      <h1 class="section-title">{{ 'shipping.title' | translate }}</h1>
      <div class="shipping-grid">
        @for (item of items; track item.title) {
          <div class="info-card">
            <div class="info-card__icon">{{ item.icon }}</div>
            <h3>{{ item.title | translate }}</h3>
            <p>{{ item.desc | translate }}</p>
          </div>
        }
      </div>
      <div class="shipping-note">
        <p>💳 {{ 'shipping.methods' | translate }}</p>
        <p>🚚 {{ 'shipping.free' | translate }}</p>
      </div>
    </div>
  `,
  styles: [`
    .shipping-grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); margin-bottom: 2rem; }
    .info-card { background: #f9fafb; border-radius: 1rem; padding: 1.5rem; }
    .info-card__icon { font-size: 2rem; margin-bottom: 0.75rem; }
    h3 { font-weight: 700; margin-bottom: 0.5rem; }
    p { font-size: 0.875rem; color: #6b7280; }
    .shipping-note { background: #eff6ff; border-radius: 1rem; padding: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; }
    .shipping-note p { font-size: 0.9rem; color: #1e40af; }
  `],
})
export class ShippingComponent {
  items = [
    { icon: '🇩🇪', title: 'shipping.de', desc: 'shipping.deDesc' },
    { icon: '🇬🇧', title: 'shipping.uk', desc: 'shipping.ukDesc' },
  ];
}
