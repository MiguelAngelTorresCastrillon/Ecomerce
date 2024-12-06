import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/product-routes/product-routes.component'),
  },
  { path: 'cart', loadChildren: () => import('./features/components/cart/cart.routes') },
  { path: 'profile', loadChildren: () => import ('./features/components/profile/profile.routes')},
  {
    path: '**',
    redirectTo: '',
  },
];
