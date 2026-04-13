import { Component } from '@angular/core';
import { OrderChart } from "./components/order-chart/order-chart";
import { OrderList } from "./components/order-list/order-list";
import { OrderOverview } from "./components/order-overview/order-overview";
import { NgIcon } from "@ng-icons/core";
import { PageTitle } from "../../../components/page-title/page-title";

@Component({
  selector: 'app-orders',
  imports: [OrderChart, OrderList, OrderOverview, NgIcon, PageTitle],
  templateUrl: './orders.html',
  styles: ``
})
export class Orders {

}
