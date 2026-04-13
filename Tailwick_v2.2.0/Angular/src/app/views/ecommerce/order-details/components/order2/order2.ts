import { Component } from '@angular/core';

type OrderInfoCard = {
  value: string;
  label: string;
  isBadge?: boolean;
  badgeClass?: string;
};

@Component({
  selector: 'app-order2',
  imports: [],
  templateUrl: './order2.html',
  styles: ``
})
export class Order2 {
  orderInfoCards: OrderInfoCard[] = [
  {
    value: '#TWT5015100366',
    label: 'Order ID'
  },
  {
    value: '02 Nov, 2023',
    label: 'Order Date'
  },
  {
    value: '09 Nov, 2023',
    label: 'Delivery Date'
  },
  {
    value: '$843.49',
    label: 'Order Amount'
  },
  {
    value: 'Shipping',
    label: 'Order Status',
    isBadge: true,
    badgeClass:
      'py-0.5 px-2.5 font-semibold uppercase border border-secondary/30 text text-secondary rounded inline-block mb-2 text-xs bg-secondary/10'
  }
];
}
