import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";

type OrderCard = {
  icon: string;        
  iconBgClass: string; 
  iconTextClass: string; 
  count: string;      
  label: string;      
}

@Component({
  selector: 'app-order-list',
  imports: [NgIcon],
  templateUrl: './order-list.html',
  styles: ``
})

export class OrderList {

  orderCards: OrderCard[] = [
  {
    icon: 'lucideBoxes',
    iconBgClass: 'bg-primary/10',
    iconTextClass: 'text-primary',
    count: '15,101',
    label: 'Total Orders'
  },
  {
    icon: 'lucideTruck',
    iconBgClass: 'bg-secondary/10',
    iconTextClass: 'text-secondary',
    count: '9,543',
    label: 'Shipping Orders'
  },
  {
    icon: 'lucideLoader',
    iconBgClass: 'bg-warning/15',
    iconTextClass: 'text-warning',
    count: '1,548',
    label: 'Pending Orders'
  },
  {
    icon: 'lucidePackagePlus',
    iconBgClass: 'bg-primary/10',
    iconTextClass: 'text-primary',
    count: '3,874',
    label: 'New Orders'
  },
  {
    icon: 'lucidePackageCheck',
    iconBgClass: 'bg-success/10',
    iconTextClass: 'text-success',
    count: '30,914',
    label: 'Delivered Orders'
  },
  {
    icon: 'lucidePackageX',
    iconBgClass: 'bg-danger/10',
    iconTextClass: 'text-danger',
    count: '3,863',
    label: 'Cancelled Orders'
  }
];

}
