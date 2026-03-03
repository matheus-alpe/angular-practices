import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'user',
    title: 'User',
    loadComponent: () => import('./user/user').then((m) => m.User),
  },
  {
    path: 'forms',
    title: 'Forms',
    loadComponent: () => import('./forms/forms').then((m) => m.Forms),
  },
  {
    path: 'dependency',
    title: 'Dependency',
    loadComponent: () => import('./dependency/dependency').then((m) => m.Dependency),
  },
  {
    path: 'resource',
    title: 'Resource',
    loadComponent: () => import('./resource/resource').then((m) => m.Resource),
  },
  {
    path: 'components',
    title: 'Components',
    loadComponent: () => import('./components/components').then((m) => m.Components),
  },
  {
    path: 'life-cycle',
    title: 'Life Cycle',
    loadComponent: () => import('./life-cycle/life-cycle').then((m) => m.LifeCycle),
  },
  {
    path: 'templates',
    title: 'Templates',
    loadComponent: () => import('./templates/templates').then((m) => m.Templates),
  },
];
