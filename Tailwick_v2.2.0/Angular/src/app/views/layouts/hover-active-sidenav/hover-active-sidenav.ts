import { Component, inject } from '@angular/core';
import { PageTitle } from "../../../components/page-title/page-title";
import { LayoutService } from '../../../core/services/layout-store.service';

@Component({
  selector: 'app-hover-active-sidenav',
  imports: [PageTitle],
  templateUrl: './hover-active-sidenav.html',
  styles: ``
})
export class HoverActiveSidenav {
  layout = inject(LayoutService)
 
   ngOnInit() {
        this.layout.setSidenavSize('hover-active')
    }

    ngOnDestroy() {
        this.layout.reset()
    }
}
