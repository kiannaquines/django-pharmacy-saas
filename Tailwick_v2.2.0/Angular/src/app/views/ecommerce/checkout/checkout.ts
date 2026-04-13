import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import { CheckoutSidebar } from "./components/checkout-sidebar/checkout-sidebar";
import { ShippingForm } from "./components/shipping-form/shipping-form";
import { PaymentForm } from "./components/payment-form/payment-form";
import { DeliveryForm } from './components/delivery-form/delivery-form';
import { PageTitle } from "../../../components/page-title/page-title";

@Component({
  selector: 'app-checkout',
  imports: [RouterLink, NgIcon, CheckoutSidebar, ShippingForm, DeliveryForm, PaymentForm, PageTitle],
  templateUrl: './checkout.html',
  styles: ``
})
export class Checkout {

}
