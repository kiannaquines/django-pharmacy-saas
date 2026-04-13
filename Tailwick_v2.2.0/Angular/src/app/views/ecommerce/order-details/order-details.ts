import { Component } from '@angular/core';
import { Order1 } from "./components/order1/order1";
import { Order2 } from "./components/order2/order2";
import { OrderSummary } from "./components/order-summary/order-summary";
import { OrderStatus } from "./components/order-status/order-status";
import { PageTitle } from "../../../components/page-title/page-title";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-details',
  imports: [Order1, Order2, OrderSummary, OrderStatus, PageTitle, RouterLink ],
  templateUrl: './order-details.html',
  styles: ``
})
export class OrderDetails {

}
