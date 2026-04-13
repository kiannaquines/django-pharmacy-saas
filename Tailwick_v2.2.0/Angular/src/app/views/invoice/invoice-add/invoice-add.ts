import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { PageTitle } from "../../../components/page-title/page-title";
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-invoice-add',
  imports: [NgIcon, PageTitle, FlatpickrDirective, RouterLink],
  templateUrl: './invoice-add.html',
  providers: [provideFlatpickrDefaults()],
  styles: ``
})
export class InvoiceAdd {
  quantity: number = 2;
  quantity2: number = 2;

  increment() {
    if (this.quantity < 100) {
      this.quantity++;
    }
  }

  decrement() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  increment2() {
    if (this.quantity2 < 100) {
      this.quantity2++;
    }
  }

  decrement2() {
    if (this.quantity2 > 0) {
      this.quantity2--;
    }
  }
}
