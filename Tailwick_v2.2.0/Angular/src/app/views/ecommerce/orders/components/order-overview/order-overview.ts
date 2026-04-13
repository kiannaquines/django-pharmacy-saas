import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { Pagination } from "../../../../../components/pagination/pagination";

type Order = {
  id: string;
  orderDate: string;
  deliveryDate: string;
  customer: string;
  paymentMethod: string;
  amount: string;
  status: string;
  statusClass: string;
}
@Component({
  selector: 'app-order-overview',
  imports: [NgIcon, Pagination],
  templateUrl: './order-overview.html',
  styles: ``
})

export class OrderOverview {

  orderList: Order[] = [
  {
    id: '#TWT5015100365',
    orderDate: '08 Jun, 2023',
    deliveryDate: '15 Jun, 2023',
    customer: 'Marie Prohaska',
    paymentMethod: 'Credit Card',
    amount: '$541.32',
    status: 'Delivered',
    statusClass: 'bg-success/10 text-success border border-success/30'
  },
  {
    id: '#TWT5015100366',
    orderDate: '11 July, 2023',
    deliveryDate: '20 July, 2023',
    customer: 'Jaqueline Hammes',
    paymentMethod: 'Paypal',
    amount: '$1,876.33',
    status: 'Shipping',
    statusClass: 'bg-secondary/10 text-secondary border border-secondary/30'
  },
  {
    id: '#TWT5015100367',
    orderDate: '21 Aug, 2023',
    deliveryDate: '24 Aug, 2023',
    customer: 'Marlene Hirthe',
    paymentMethod: 'Visa Card',
    amount: '$15,023.99',
    status: 'New',
    statusClass: 'bg-info/10 text-info border border-info/30'
  },
  {
    id: '#TWT5015100368',
    orderDate: '28 Nov, 2023',
    deliveryDate: '02 Dec, 2023',
    customer: 'Reagan Larson',
    paymentMethod: 'American Express',
    amount: '$783.56',
    status: 'Delivered',
    statusClass: 'bg-success/10 text-success border border-success/30'
  },
  {
    id: '#TWT5015100369',
    orderDate: '11 Oct, 2023',
    deliveryDate: '16 Oct, 2023',
    customer: 'Glennie Langosh',
    paymentMethod: 'American Express',
    amount: '$986.49',
    status: 'Pending',
    statusClass: 'bg-warning/10 text-warning border border-warning/30'
  },
  {
    id: '#TWT5015100370',
    orderDate: '16 Feb, 2023',
    deliveryDate: '22 Feb, 2023',
    customer: 'Rickie Cremin',
    paymentMethod: 'COD',
    amount: '$741.32',
    status: 'Delivered',
    statusClass: 'bg-success/10 text-success border border-success/30'
  },
  {
    id: '#TWT5015100371',
    orderDate: '18 Apr, 2023',
    deliveryDate: '29 Apr, 2023',
    customer: 'Domenic Tromp',
    paymentMethod: 'Credit Card',
    amount: '$1,386.49',
    status: 'Shipping',
    statusClass: 'bg-secondary/10 text-secondary border border-secondary/30'
  },
  {
    id: '#TWT5015100372',
    orderDate: '21 Jan, 2024',
    deliveryDate: '24 Jan, 2023',
    customer: 'Akeem Paucek',
    paymentMethod: 'PayPal',
    amount: '$3,487.21',
    status: 'New',
    statusClass: 'bg-info/10 text-info border border-info/30'
  },
  {
    id: '#TWT5015100373',
    orderDate: '05 Oct, 2024',
    deliveryDate: '11 Oct, 2023',
    customer: 'David Gaby',
    paymentMethod: 'COD',
    amount: '$5,986.11',
    status: 'Return',
    statusClass: 'bg-default-100 text-default-800/80 border border-default-800/20'
  },
  {
    id: '#TWT5015100374',
    orderDate: '07 Oct, 2024',
    deliveryDate: '13 Oct, 2023',
    customer: 'Joel Freeleagus',
    paymentMethod: 'American Express',
    amount: '$9,451.75',
    status: 'Cancelled',
    statusClass: 'bg-danger/10 text-danger border border-danger/30'
  }
];
}
