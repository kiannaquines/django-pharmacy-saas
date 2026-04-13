import { Component, inject } from '@angular/core';
import { PageTitle } from "../../../components/page-title/page-title";
import { LayoutService } from '../../../core/services/layout-store.service';

@Component({
  selector: 'app-rtl-mode',
  imports: [PageTitle],
  templateUrl: './rtl-mode.html',
  styles: ``
})
export class RtlMode {
 layout = inject(LayoutService)
 
   ngOnInit() {
        this.layout.setDirection('rtl')
    }

    ngOnDestroy() {
        this.layout.reset()
    }
}
