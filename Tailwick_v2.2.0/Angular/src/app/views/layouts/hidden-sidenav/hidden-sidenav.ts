import { Component, inject } from '@angular/core';
import { PageTitle } from "../../../components/page-title/page-title";
import { LayoutService } from '../../../core/services/layout-store.service';

@Component({
  selector: 'app-hidden-sidenav',
  imports: [PageTitle],
  templateUrl: './hidden-sidenav.html',
  styles: ``
})
export class HiddenSidenav {
    layout = inject(LayoutService)
 
   ngOnInit() {
        this.layout.setSidenavSize('hidden')
    }

    ngOnDestroy() {
        this.layout.reset()
    }
}
