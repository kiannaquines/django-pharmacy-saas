import { Component } from '@angular/core';
import { Pagination } from "../../../../components/pagination/pagination";
import { NgIcon } from "@ng-icons/core";
import { SalaryReport } from "./components/salary-report/salary-report";
import { SalaryDetails } from "./components/salary-details/salary-details";
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';
import { PageTitle } from "../../../../components/page-title/page-title";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-salary',
  imports: [Pagination, NgIcon, SalaryReport, SalaryDetails, FlatpickrDirective, PageTitle, RouterLink],
  templateUrl: './employee-salary.html',
  providers: [provideFlatpickrDefaults()],
  styles: ``
})
export class EmployeeSalary {

}
