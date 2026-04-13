import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Maintenance } from './views/extra/pages/maintenance/maintenance';
import { ComingSoon } from './views/extra/pages/coming-soon/coming-soon';
import { Error404 } from './views/extra/pages/error-404/error-404';
import { Offline } from './views/extra/pages/offline/offline';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboards/e-commerce',
        pathMatch: 'full',
    },
    {
        path: 'pages/maintenance',
        component: Maintenance,
        data: { title: 'Maintenance' },
    },
    {
        path: 'pages/coming-soon',
        component: ComingSoon,
        data: { title: 'Coming Soon' },
    },
    {
        path: 'pages/404',
        component: Error404,
        data: { title: '404' },
    },
    {
        path: 'pages/offline',
        component: Offline,
        data: { title: 'Offline' },
    },
    {
        path: '',
        loadChildren: () => import('./views/landing/landing.routes').then((mod) => mod.LANDING_ROUTES)
    },
    {
        path: '',
        loadChildren: () => import('./views/extra/basic-auth/basic-auth.route').then((mod) => mod.BASIC_AUTH_ROUTES)
    },
    {
        path: '',
        loadChildren: () => import('./views/extra/cover-auth/cover-auth.route').then((mod) => mod.COVER_AUTH_ROUTES)
    },
    {
        path: '',
        loadChildren: () => import('./views/extra/boxed-auth/boxed-auth.route').then((mod) => mod.BOXED_AUTH_ROUTES)
    },
    {
        path: '',
        loadChildren: () => import('./views/extra/modern-auth/modern-auth.route').then((mod) => mod.MODERN_AUTH_ROUTES)
    },
    {
        path: '',
        component: MainLayout,
        loadChildren: () => import('./views/views.routes').then((mod) => mod.VIEWS_ROUTES)
    }
];

