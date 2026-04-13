import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { HrMetrics } from "./components/hr-metrics/hr-metrics";
import { ApplicationChart } from "./components/application-chart/application-chart";
import { Performance } from "./components/performance/performance";
import { TotalProject } from "./components/total-project/total-project";
import { UpcomingInterview } from "./components/upcoming-interview/upcoming-interview";
import { Payroll } from "./components/payroll/payroll";
import { UpcomingScheduled } from "./components/upcoming-scheduled/upcoming-scheduled";
import { PageTitle } from "../../../components/page-title/page-title";

@Component({
  selector: 'app-hr',
  imports: [Hero, HrMetrics, ApplicationChart, Performance, TotalProject, UpcomingInterview, Payroll, UpcomingScheduled, PageTitle],
  templateUrl: './hr.html',
  styles: ``
})
export class Hr {

}
