import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="container page">
      <div class="about">
        <div class="about__text">
          <h1>{{ 'about.title' | translate }}</h1>
          <p class="about__subtitle">{{ 'about.subtitle' | translate }}</p>
          <p class="about__body">{{ 'about.text' | translate }}</p>
        </div>
        <div class="about__stats">
          @for (stat of stats; track stat.key) {
            <div class="stat-card">
              <p class="stat-card__value">{{ stat.key | translate }}</p>
              <p class="stat-card__desc">{{ stat.desc | translate }}</p>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about { display: grid; gap: 3rem; @media(min-width:768px){ grid-template-columns: 1fr 1fr; align-items: start; } }
    h1 { font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem; }
    .about__subtitle { font-size: 1.125rem; color: #2563eb; font-weight: 600; margin-bottom: 1rem; }
    .about__body { color: #374151; line-height: 1.8; }
    .about__stats { display: flex; flex-direction: column; gap: 1rem; }
    .stat-card { background: #f9fafb; border-radius: 1rem; padding: 1.5rem; }
    .stat-card__value { font-size: 1.5rem; font-weight: 800; color: #2563eb; }
    .stat-card__desc { font-size: 0.875rem; color: #6b7280; margin-top: 0.25rem; }
  `],
})
export class AboutComponent {
  stats = [
    { key: 'about.stat1', desc: 'about.stat1desc' },
    { key: 'about.stat2', desc: 'about.stat2desc' },
    { key: 'about.stat3', desc: 'about.stat3desc' },
  ];
}
