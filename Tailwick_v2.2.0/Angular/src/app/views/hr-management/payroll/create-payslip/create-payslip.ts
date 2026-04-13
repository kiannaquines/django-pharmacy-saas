import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';
import { PageTitle } from "../../../../components/page-title/page-title";

@Component({
  selector: 'app-create-payslip',
  imports: [NgIcon, FlatpickrDirective, PageTitle],
  templateUrl: './create-payslip.html',
   providers: [provideFlatpickrDefaults()],
  styles: ``
})
export class CreatePayslip {

}
