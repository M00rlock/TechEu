import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <main class="min-h-screen">
      <router-outlet />
    </main>
    <app-footer />
  `,
})
export class AppComponent implements OnInit {
  private translate = inject(TranslateService);

  ngOnInit() {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null;
    this.translate.use(saved || 'en');
  }
}

export { AppComponent as App };
