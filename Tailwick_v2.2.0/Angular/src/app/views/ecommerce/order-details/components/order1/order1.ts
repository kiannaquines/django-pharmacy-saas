import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";

type DetailCard = {
  title: string;
  name?: string;
  addressLine1?: string;
  addressLine2?: string;
  id?: string;
  paymentMethod?: string;
  cardNumber?: string;
  email?: string;
  phone?: string;
  iconType: 'icon' | 'image';
  iconName?: string;
  iconSrc?: string;
  bgClass: string;
  textClass: string;
};

@Component({
  selector: 'app-order1',
  imports: [NgIcon],
  templateUrl: './order1.html',
  styles: ``
})
export class Order1 {
  detailCards: DetailCard[] = [
  {
    title: 'Shipping Details',
    name: 'Pauline Hylton',
    addressLine1: '1235 Crossing Meadows Dr, Onalaska',
    addressLine2: 'West Virginia, USA',
    iconType: 'icon',
    iconName: 'lucideTruck',
    bgClass: 'bg-secondary/10',
    textClass: 'text-secondary'
  },
  {
    title: 'Billing Details',
    name: 'Pauline Hylton',
    addressLine1: '1235 Crossing Meadows Dr, Onalaska',
    addressLine2: 'West Virginia, USA',
    iconType: 'icon',
    iconName: 'lucideCreditCard',
    bgClass: 'bg-danger/10',
    textClass: 'text-danger'
  },
  {
    title: 'Payment Details',
    id: '#TSD456DF41SD5',
    paymentMethod: 'Credit Card',
    cardNumber: 'xxxx xxxx xxxx 1501',
    iconType: 'icon',
    iconName: 'lucideCircleDollarSign',
    bgClass: 'bg-info/10',
    textClass: 'text-info'
  },
  {
    title: 'Customer Info',
    name: 'Pauline Hylton',
    email: 'pauline@tailwick.com',
    phone: '+(78) 120 4843 4714',
    iconType: 'image',
    iconSrc: 'assets/images/user/avatar-4.png',
    bgClass: 'bg-warning/20',
    textClass: 'text-info'
  }
];

}
