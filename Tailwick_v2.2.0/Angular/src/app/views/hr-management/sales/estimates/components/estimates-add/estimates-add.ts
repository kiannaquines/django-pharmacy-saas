import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';


@Component({
  selector: 'app-estimates-add',
  imports: [NgIcon, FlatpickrDirective],
  templateUrl: './estimates-add.html',
  providers: [provideFlatpickrDefaults()],
  styles: ``
})
export class EstimatesAdd {

}
