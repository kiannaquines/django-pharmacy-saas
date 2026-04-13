import { Component, inject } from '@angular/core';
import { PageTitle } from "../../../components/page-title/page-title";
import { LayoutService } from '../../../core/services/layout-store.service';

@Component({
  selector: 'app-small-sidenav',
  imports: [PageTitle],
  templateUrl: './small-sidenav.html',
  styles: ``
})
export class SmallSidenav {
    layout = inject(LayoutService)
 
   ngOnInit() {
        this.layout.setSidenavSize('sm')
    }

    ngOnDestroy() {
        this.layout.reset()
    }
}
