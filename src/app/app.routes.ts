import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: '',
  },
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page').then((m) => m.HomePage),
  }
];
