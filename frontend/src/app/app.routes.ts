import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'catalog', loadComponent: () => import('./pages/catalog/catalog.component').then(m => m.CatalogComponent) },
  { path: 'product/:slug', loadComponent: () => import('./pages/product/product.component').then(m => m.ProductComponent) },
  { path: 'cart', loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent) },
  { path: 'checkout', loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent) },
  { path: 'checkout/success', loadComponent: () => import('./pages/checkout/success.component').then(m => m.SuccessComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'shipping', loadComponent: () => import('./pages/shipping/shipping.component').then(m => m.ShippingComponent) },
  { path: 'returns', loadComponent: () => import('./pages/returns/returns.component').then(m => m.ReturnsComponent) },
  { path: 'contacts', loadComponent: () => import('./pages/contacts/contacts.component').then(m => m.ContactsComponent) },
  { path: 'faq', loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent) },
  { path: '**', redirectTo: '' },
];
