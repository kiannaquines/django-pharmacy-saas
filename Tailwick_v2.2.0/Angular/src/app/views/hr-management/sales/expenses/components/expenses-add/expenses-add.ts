import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';

@Component({
  selector: 'app-expenses-add',
  imports: [NgIcon, FlatpickrDirective],
  templateUrl: './expenses-add.html',
   providers: [provideFlatpickrDefaults()],
  styles: ``
})
export class ExpensesAdd {

}
