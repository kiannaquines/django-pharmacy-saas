import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';

@Component({
  selector: 'app-holiday-delete2',
  imports: [NgIcon, FlatpickrDirective],
  templateUrl: './holiday-delete2.html',
  providers: [provideFlatpickrDefaults()],
  styles: ``
})
export class HolidayDelete2 {

}
