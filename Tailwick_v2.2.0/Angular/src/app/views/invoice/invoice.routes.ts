import { Routes } from "@angular/router";
import { InvoiceOverview } from "./invoice-overview/invoice-overview";
import { InvoiceList } from "./invoice-list/invoice-list";
import { InvoiceAdd } from "./invoice-add/invoice-add";

export const INVOICE_ROUTES: Routes = [
    {
        path: 'invoice/overview',
        component: InvoiceOverview,
        data: { title: 'Overview' },
    },
    {
        path: 'invoice/list',
        component: InvoiceList,
        data: { title: 'List View' },
    },
    {
        path: 'invoice/add-new',
        component: InvoiceAdd,
        data: { title: 'Add New' },
    }
]