import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";

type StatCard = {
  icon: string;
  textColor: string;
  bgColor: string;
  value: number;
  label: string;
}

@Component({
  selector: 'app-attendance-card',
  imports: [NgIcon],
  templateUrl: './attendance-card.html',
  styles: ``
})
export class AttendanceCard {
  statCards: StatCard[] = [
    {
      icon: "lucideUsers",
      textColor: "text-info",
      bgColor: "bg-info/10",
      value: 43,
      label: "Total Employee"
    },
    {
      icon: "lucideUserX",
      textColor: "text-danger",
      bgColor: "bg-danger/10",
      value: 6,
      label: "Absent Employee (Today)"
    },
    {
      icon: "lucideUserCheck",
      textColor: "text-success",
      bgColor: "bg-success/10",
      value: 32,
      label: "Present Employee (Today)"
    },
    {
      icon: "lucideBriefcase",
      textColor: "text-primary",
      bgColor: "bg-primary/10",
      value: 22,
      label: "Working Days (Current Month)"
    }
  ];
}
