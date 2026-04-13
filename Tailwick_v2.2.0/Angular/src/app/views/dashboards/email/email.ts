import { Component } from '@angular/core';
import { StatisticsWidget } from "./components/statistics-widget/statistics-widget";
import { EmailRate } from "./components/email-rate/email-rate";
import { EmaildataChart } from "./components/emaildata-chart/emaildata-chart";
import { EmailmarketingChart } from "./components/emailmarketing-chart/emailmarketing-chart";
import { EmailBanner } from "./components/email-banner/email-banner";
import { EmailPerformance } from "./components/email-performance/email-performance";
import { PageTitle } from "../../../components/page-title/page-title";

@Component({
  selector: 'app-email',
  imports: [StatisticsWidget, EmailRate, EmaildataChart, EmailmarketingChart, EmailBanner, EmailPerformance, PageTitle],
  templateUrl: './email.html',
  styles: ``
})
export class Email {

}
