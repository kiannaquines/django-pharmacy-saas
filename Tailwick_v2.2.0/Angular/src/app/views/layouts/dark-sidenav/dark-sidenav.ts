import { Component, inject } from '@angular/core';
import { PageTitle } from "../../../components/page-title/page-title";
import { LayoutService } from '../../../core/services/layout-store.service';

@Component({
  selector: 'app-dark-sidenav',
  imports: [PageTitle],
  templateUrl: './dark-sidenav.html',
  styles: ``
})
export class DarkSidenav {
  layout = inject(LayoutService)
 
   ngOnInit() {
        this.layout.setSidenavColor('dark')
    }

    ngOnDestroy() {
        this.layout.reset()
    }
}
