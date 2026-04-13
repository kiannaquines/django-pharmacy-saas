import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { Pagination } from "../../../../../components/pagination/pagination";

type TableRow = {
  checkboxId: string;
  industry: string;
  date: string;
  sent: string;
  opened: string;
  clicked: string;
  bounced: string;
  unsubscribed: string;
  spam: string;
}

@Component({
  selector: 'app-email-performance',
  imports: [NgIcon, Pagination],
  templateUrl: './email-performance.html',
  styles: ``
})
export class EmailPerformance {
   
  tableData: TableRow[] = [
  { checkboxId: 'checkbox-all', industry: 'Adverting & Marketing Agencies', date: '05 Aug, 2023', sent: '18.65%', opened: '2.66%', clicked: '14.14%', bounced: '0.19%', unsubscribed: '1.29%', spam: '0.03%' },
  { checkboxId: 'checkbox-all', industry: 'Automotive & Aerospace', date: '20 Sep, 2023', sent: '20.13%', opened: '3.44%', clicked: '18.03%', bounced: '0.18%', unsubscribed: '1.18%', spam: '0.00%' },
  { checkboxId: 'checkbox-all', industry: 'Education', date: '04 Jun, 2023', sent: '18.74%', opened: '2.80%', clicked: '14.94%', bounced: '0.17%', unsubscribed: '1.35%', spam: '0.02%' },
  { checkboxId: 'checkbox-all', industry: 'Financial Services', date: '11 Feb, 2023', sent: '18.23%', opened: '2.72%', clicked: '14.79%', bounced: '0.16%', unsubscribed: '1.30%', spam: '0.00%' },
  { checkboxId: 'checkbox-all', industry: 'Food & Beverage', date: '26 Nov, 2023', sent: '15.48%', opened: '1.69%', clicked: '10.69%', bounced: '0.11%', unsubscribed: '0.63%', spam: '0.00%' },
  { checkboxId: 'checkbox-all', industry: 'Healthcare Services', date: '19 Jul, 2023', sent: '19.12%', opened: '2.98%', clicked: '15.11%', bounced: '0.17%', unsubscribed: '1.08%', spam: '0.00%' },
  { checkboxId: 'checkbox-all', industry: 'Professional Services', date: '14 Jun, 2023', sent: '18.14%', opened: '2.39%', clicked: '12.92%', bounced: '0.17%', unsubscribed: '1.10%', spam: '0.00%' },
  { checkboxId: 'checkbox-all', industry: 'Logistics & Wholesale', date: '03 Dec, 2023', sent: '18.50%', opened: '0.20%', clicked: '14.84%', bounced: '0.15%', unsubscribed: '1.40%', spam: '0.00%' },
  { checkboxId: 'checkbox-all', industry: 'Real Estate Agents & Brokers', date: '03 Dec, 2023', sent: '18.06%', opened: '2.02%', clicked: '11.51%', bounced: '0.22%', unsubscribed: '1.18%', spam: '0.00%' },
  { checkboxId: 'checkbox-all', industry: 'Nonprofit', date: '03 Dec, 2023', sent: '20.39%', opened: '2.66%', clicked: '12.99%', bounced: '0.17%', unsubscribed: '1.09%', spam: '0.01%' },
  { checkboxId: 'checkbox-all', industry: 'Retail', date: '03 Dec, 2023', sent: '14.98%', opened: '2.25%', clicked: '14.82%', bounced: '0.12%', unsubscribed: '0.69%', spam: '0.01%' },
];

}
