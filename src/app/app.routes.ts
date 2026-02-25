import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'user',
    loadComponent: () => import('./user/user').then((m) => m.User),
  },
  {
    path: 'forms',
    loadComponent: () => import('./forms/forms').then((m) => m.Forms),
  },
  {
    path: 'dependency',
    loadComponent: () => import('./dependency/dependency').then((m) => m.Dependency),
  },
];
