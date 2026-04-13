import { Component, inject } from '@angular/core';
import { PageTitle } from "../../../components/page-title/page-title";
import { LayoutService } from '../../../core/services/layout-store.service';

@Component({
  selector: 'app-compact-sidenav',
  imports: [PageTitle],
  templateUrl: './compact-sidenav.html',
  styles: ``
})
export class CompactSidenav {
  layout = inject(LayoutService)
 
   ngOnInit() {
        this.layout.setSidenavSize('md')
    }

    ngOnDestroy() {
        this.layout.reset()
    }
}
