import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";

type StatCard = {
  icon: string;
  bgClass: string;
  textClass: string;
  value: string;
  prefix?: string;
  suffix?: string;
  label: string;
};


@Component({
  selector: 'app-overview',
  imports: [NgIcon],
  templateUrl: './overview.html',
  styles: ``
})

export class Overview {

   stats: StatCard[] = [
    {
      icon: 'lucideWallet',
      bgClass: 'bg-primary/10',
      textClass: 'text-primary',
      prefix: '$',
      value: '236.18',
      suffix: 'k',
      label: 'Total Revenue',
    },
    {
      icon: 'lucidePackage',
      bgClass: 'bg-info/10',
      textClass: 'text-info',
      value: '13,461',
      label: 'Total Orders',
    },
    {
      icon: 'lucideTruck',
      bgClass: 'bg-success/10',
      textClass: 'text-success',
      value: '17,150',
      label: 'Delivered',
    },
    {
      icon: 'lucidePackageX',
      bgClass: 'bg-danger/10',
      textClass: 'text-danger',
      value: '3,519',
      label: 'Cancelled',
    },
  ];
  
}
