import { Component, inject } from '@angular/core';
import { PageTitle } from "../../../components/page-title/page-title";
import { LayoutService } from '../../../core/services/layout-store.service';

@Component({
  selector: 'app-hover-sidenav',
  imports: [PageTitle],
  templateUrl: './hover-sidenav.html',
  styles: ``
})

export class HoverSidenav {
  layout = inject(LayoutService)
 
   ngOnInit() {
        this.layout.setSidenavSize('hover')
    }

    ngOnDestroy() {
        this.layout.reset()
    }

}
