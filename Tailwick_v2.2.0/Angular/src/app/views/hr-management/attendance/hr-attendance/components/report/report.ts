import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";

type WorkHourCard = {
  icon: string;
  iconColor: string;
  iconBg: string;
  counter: number;
  label: string;
};

@Component({
  selector: 'app-report',
  imports: [NgIcon],
  templateUrl: './report.html',
  styles: ``
})
export class Report {

  workHoursData: WorkHourCard[] = [
  {
    icon: "lucideClock",
    iconColor: "text-info",
    iconBg: "bg-info/10",
    counter: 187,
    label: "Approved Hours"
  },
  {
    icon: "lucideOctagonX",
    iconColor: "text-danger",
    iconBg: "bg-danger/10",
    counter: 19,
    label: "Rejected Hours"
  },
  {
    icon: "lucideRefreshCcw",
    iconColor: "text-warning",
    iconBg: "bg-warning/10",
    counter: 32,
    label: "Pending Hours"
  }
];

}
