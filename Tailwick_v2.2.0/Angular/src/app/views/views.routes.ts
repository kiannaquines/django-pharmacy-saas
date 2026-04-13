import { Routes } from "@angular/router";

export const VIEWS_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('./dashboards/dashboards.routes').then((mod) => mod.DASHBOARDS_ROUTES)
    },

    {
        path: '',
        loadChildren: () => import('./apps/apps.routes').then((mod) => mod.APPS_ROUTES)
    },
    {
        path: '',
        loadChildren: () => import('./ecommerce/ecommerce.routes').then((mod) => mod.ECOMMERCE_ROUTES)
    },
    {
        path: '',
        loadChildren: () => import('./hr-management/management.routes').then((mod) => mod.MANAGEMENT_ROUTES)
    },
    {
        path: '',
        loadChildren: () => import('./invoice/invoice.routes').then((mod) => mod.INVOICE_ROUTES)
    },
    {
        path: '',
        loadChildren: () => import('./users/users.routes').then((mod) => mod.USERS_ROUTES)
    },
    {
        path: '',
        loadChildren: () => import('./extra/extra.routes').then((mod) => mod.EXTRA_ROUTES)
    },
     {
        path: '',
        loadChildren: () => import('./layouts/layout.routes').then((mod) => mod.LAYOUT_ROUTES)
    },
]