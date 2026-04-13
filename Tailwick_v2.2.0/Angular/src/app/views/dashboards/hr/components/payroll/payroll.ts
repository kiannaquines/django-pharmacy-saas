import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import { SimplebarAngularModule } from 'simplebar-angular';

interface TransactionItem {
  icon: string;
  iconClass: string;
  name: string;
  amount: string;
  status: 
    {
      label: string;
      class: string;
    }
}

@Component({
    selector: 'app-payroll',
    imports: [NgIcon, SimplebarAngularModule, RouterLink ],
    templateUrl: './payroll.html',
    styles: ``
  })

export class Payroll {
  transactions: TransactionItem[] = [
  {
    icon: 'lucideMoveUpRight',
    iconClass: 'text-danger',
    name: 'Christopher Horn',
    amount: '$145.32',
    status: { label: 'Paid', class: 'bg-success/15 text-success' }
  },
  {
    icon: 'lucideMoveUpLeft',
    iconClass: 'text-success',
    name: 'Richard Peters',
    amount: '$4512.99',
    status: { label: 'Pending', class: 'bg-warning/15 text-warning' }
  },
  {
    icon: 'lucideMoveUpLeft',
    iconClass: 'text-success',
    name: 'James Perez',
    amount: '$879.99',
    status: { label: 'Paid', class: 'bg-success/15 text-success' }
  },
  {
    icon: 'lucideMoveUpRight',
    iconClass: 'text-danger',
    name: 'Myrtle Velez',
    amount: '$978.14',
    status: { label: 'Cancelled', class: 'bg-danger/15 text-danger' }
  },
  {
    icon: 'lucideMoveUpLeft',
    iconClass: 'text-success',
    name: 'Brad Castillo',
    amount: '$412.59',
    status: { label: 'Pending', class: 'bg-warning/15 text-warning' }
  },
  {
    icon: 'lucideMoveUpLeft',
    iconClass: 'text-success',
    name: 'Robert Jump',
    amount: '$666.99',
    status: { label: 'Paid', class: 'bg-success/15 text-success' }
  },
  {
    icon: 'lucideMoveUpRight',
    iconClass: 'text-danger',
    name: 'Myrtle Velez',
    amount: '$978.14',
    status: { label: 'Cancelled', class: 'bg-danger/15 text-danger' }
  },
  {
    icon: 'lucideMoveUpRight',
    iconClass: 'text-danger',
    name: 'Christopher Horn',
    amount: '$145.32',
    status: { label: 'Paid', class: 'bg-success/15 text-success' }
  },
  {
    icon: 'lucideMoveDownLeft',
    iconClass: 'text-success',
    name: 'Richard Peters',
    amount: '$4512.99',
    status: { label: 'Pending', class: 'bg-warning/15 text-warning' }
  },
  {
    icon: 'lucideMoveDownLeft',
    iconClass: 'text-success',
    name: 'James Perez',
    amount: '$879.99',
    status: { label: 'Paid', class: 'bg-success/15 text-success' }
  }
];

}
