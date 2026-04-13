import { Routes } from "@angular/router";
import { CompactSidenav } from "./compact-sidenav/compact-sidenav";
import { DarkMode } from "./dark-mode/dark-mode";
import { DarkSidenav } from "./dark-sidenav/dark-sidenav";
import { HiddenSidenav } from "./hidden-sidenav/hidden-sidenav";
import { HoverActiveSidenav } from "./hover-active-sidenav/hover-active-sidenav";
import { HoverSidenav } from "./hover-sidenav/hover-sidenav";
import { OffcanvasSidenav } from "./offcanvas-sidenav/offcanvas-sidenav";
import { RtlMode } from "./rtl-mode/rtl-mode";
import { SmallSidenav } from "./small-sidenav/small-sidenav";

export const LAYOUT_ROUTES: Routes = [
    {
        path: 'layouts/compact-sidenav',
        component : CompactSidenav,
        data: { title: 'Compact Sidenav' },
    },
    {
        path: 'layouts/dark-mode',
        component : DarkMode,
        data: { title: 'Dark Mode' },
    },
    {
        path: 'layouts/dark-sidenav',
        component : DarkSidenav,
        data: { title: 'Dark Sidenav' },
    },
    {
        path: 'layouts/hidden-sidenav',
        component : HiddenSidenav,
        data: { title: 'Hidden Sidenav' },
    },
    {
        path: 'layouts/hover-active-sidenav',
        component : HoverActiveSidenav,
        data: { title: 'Hover Active Sidenav' },
    },
    {
        path: 'layouts/hover-sidenav',
        component : HoverSidenav,
        data: { title: 'Hover View Sidenav' },
    },
    {
        path: 'layouts/offcanvas-sidenav',
        component : OffcanvasSidenav,
        data: { title: 'Offcavas Sidenav' },
    },
    {
        path: 'layouts/rtl-mode',
        component : RtlMode,
        data: { title: 'RTL Mode' },
    },
    {
        path: 'layouts/small-sidenav',
        component : SmallSidenav,
        data: { title: 'Small Sidenav' },
    }
]