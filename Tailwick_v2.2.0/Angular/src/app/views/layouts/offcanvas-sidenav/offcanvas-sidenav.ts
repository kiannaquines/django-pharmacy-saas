import { Component, inject } from '@angular/core';
import { PageTitle } from "../../../components/page-title/page-title";
import { LayoutService } from '../../../core/services/layout-store.service';

@Component({
  selector: 'app-offcanvas-sidenav',
  imports: [PageTitle],
  templateUrl: './offcanvas-sidenav.html',
  styles: ``
})
export class OffcanvasSidenav {
  
    layout = inject(LayoutService)
 
   ngOnInit() {
        this.layout.setSidenavSize('offcanvas')
    }

    ngOnDestroy() {
        this.layout.reset()
    }

}
