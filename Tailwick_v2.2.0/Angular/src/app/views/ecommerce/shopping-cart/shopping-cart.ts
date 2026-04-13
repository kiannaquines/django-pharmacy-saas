import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { CartDetails } from "./components/cart-details/cart-details";
import { OrderSummary } from "./components/order-summary/order-summary";
import { PageTitle } from "../../../components/page-title/page-title";

@Component({
  selector: 'app-shopping-cart',
  imports: [NgIcon, CartDetails, OrderSummary, PageTitle],
  templateUrl: './shopping-cart.html',
  styles: ``
})
export class ShoppingCart {

}
