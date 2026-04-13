import { Component, inject } from '@angular/core';
import { PageTitle } from "../../../components/page-title/page-title";
import { LayoutService } from '../../../core/services/layout-store.service';

@Component({
  selector: 'app-dark-mode',
  imports: [PageTitle],
  templateUrl: './dark-mode.html',
  styles: ``
})
export class DarkMode {
  layout = inject(LayoutService)
 
   ngOnInit() {
        this.layout.setTheme('dark')
    }

    ngOnDestroy() {
        this.layout.reset()
    }
}






