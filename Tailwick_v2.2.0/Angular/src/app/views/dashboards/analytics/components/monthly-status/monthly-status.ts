import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";

type MonthlyStatusType = {
  bgClass: string;
    iconClass: string;
    icon: string;
    title: string;
    count: string;
    percent: string;
    percentClass: string;
}

@Component({
  selector: 'app-monthly-status',
  imports: [NgIcon],
  templateUrl: './monthly-status.html',
  styles: ``
})
export class MonthlyStatus {
   
  monthlyStatus: MonthlyStatusType[] = [
    {
      bgClass: 'bg-danger/10',
      iconClass: 'text-danger',
      icon: 'lucideMail',
      title: 'Clicked',
      count: '9,745',
      percent: '2.5%',
      percentClass: 'text-success'
    },
    {
      bgClass: 'bg-secondary/10',
      iconClass: 'text-secondary',
      icon: 'lucideUsers',
      title: 'Subscribe',
      count: '3,352',
      percent: '18.9%',
      percentClass: 'text-success'
    },
    {
      bgClass: 'bg-orange-500/10',
      iconClass: 'text-orange-500',
      icon: 'lucideUserX',
      title: 'Unsubscribe',
      count: '85,745',
      percent: '1.2%',
      percentClass: 'text-danger'
    },
    {
      bgClass: 'bg-success/10',
      iconClass: 'text-success',
      icon: 'lucideEye',
      title: 'Viewers',
      count: '85,745',
      percent: '11.6%',
      percentClass: 'text-success'
    },
    {
      bgClass: 'bg-default-950/10',
      iconClass: '',
      icon: 'lucidePackageOpen',
      title: 'Opened',
      count: '85,745',
      percent: '3.1%',
      percentClass: 'text-danger'
    },
    {
      bgClass: 'bg-info/10',
      iconClass: 'text-info',
      icon: 'lucideUserX',
      title: 'Trial Period',
      count: '70,775',
      percent: '22%',
      percentClass: 'text-danger'
    }
  ];

}
