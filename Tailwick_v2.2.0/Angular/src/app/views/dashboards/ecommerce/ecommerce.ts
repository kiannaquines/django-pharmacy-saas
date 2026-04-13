import { Component } from '@angular/core';
import { Banner } from "./components/banner/banner";
import { Overview } from "./components/overview/overview";
import { OrderChart } from "./components/order-chart/order-chart";
import { SalesRevenueChart } from "./components/sales-revenue-chart/sales-revenue-chart";
import { TrafficResourcesChart } from "./components/traffic-resources-chart/traffic-resources-chart";
import { ProductOrders } from "./components/product-orders/product-orders";
import { CustomerServices } from "./components/customer-services/customer-services";
import { MonthlySale } from "./components/monthly-sale/monthly-sale";
import { SellingProduct } from "./components/selling-product/selling-product";
import { Audience } from "./components/audience/audience";
import { PageTitle } from "../../../components/page-title/page-title";

@Component({
  selector: 'app-ecommerce',
  imports: [Banner, Overview, OrderChart, SalesRevenueChart, TrafficResourcesChart, ProductOrders, CustomerServices, MonthlySale, SellingProduct, Audience, PageTitle],
  templateUrl: './ecommerce.html',
  styles: ``
})
export class Ecommerce {

}
