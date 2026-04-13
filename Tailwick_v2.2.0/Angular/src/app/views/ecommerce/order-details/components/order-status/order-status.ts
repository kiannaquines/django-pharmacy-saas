import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";

type OrderStatusType = {
  title: string;
  description: string;
  date: string;
};

@Component({
  selector: 'app-order-status',
  imports: [RouterLink, NgIcon],
  templateUrl: './order-status.html',
  styles: ``
})

export class OrderStatus {
  orderStatusList: OrderStatusType[] = [
  {
    title: 'Order Placed',
    description: 'Your order has been successfully submitted.',
    date: '02 Nov, 2023'
  },
  {
    title: 'Order Processing',
    description: 'Once the order is received, it goes through the processing stage. During this time, the items are gathered, and the order is prepared for shipment.',
    date: '02 Nov, 2023'
  },
  {
    title: 'Shipped Order',
    description: "The order is shipped out to the customer's designated delivery address.",
    date: '04 Nov, 2023'
  },
  {
    title: 'Out for Delivery',
    description: 'This status indicates that the order is currently out for delivery by the shipping or courier company.',
    date: '06 Nov, 2023'
  },
  {
    title: 'Delivered',
    description: 'Finally, when the order successfully reaches the customer\'s address and is handed over, the status changes to "Delivered."',
    date: '09 Nov, 2023'
  }
];
}
