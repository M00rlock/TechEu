import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="container page">
      <h1 class="section-title">{{ 'contacts.title' | translate }}</h1>
      <div class="contacts-grid">
        @for (item of items; track item.icon) {
          <div class="contact-card">
            <div class="contact-card__icon">{{ item.icon }}</div>
            <p>{{ item.value | translate }}</p>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .contacts-grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
    .contact-card { background: #f9fafb; border-radius: 1rem; padding: 2rem; text-align: center; }
    .contact-card__icon { font-size: 2.5rem; margin-bottom: 1rem; }
    p { font-size: 0.9rem; color: #374151; }
  `],
})
export class ContactsComponent {
  items = [
    { icon: '📧', value: 'contacts.email' },
    { icon: '🕐', value: 'contacts.hours' },
    { icon: '💬', value: 'contacts.chat' },
  ];
}
