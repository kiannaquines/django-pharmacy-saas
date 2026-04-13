import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import { Pagination } from "../../../../../components/pagination/pagination";

 type Order = {
  id: string;
  orderNo: string;
  customer: string;
  country: string;
  date: string;
  payment: string;
  items: string;
  price: string;
  total: string;
  status: {
    label: string;
    bgClass: string;
    textClass: string;
    borderClass: string;
  };
}

@Component({
  selector: 'app-product-orders',
  imports: [NgIcon, RouterLink, Pagination],
  templateUrl: './product-orders.html',
  styles: ``
})

export class ProductOrders {
  orders: Order[] = [
  {
    id: "01",
    orderNo: "#TWT5015100365",
    customer: "Marie Prohaska",
    country: "Germany",
    date: "08 Jun, 2023",
    payment: "Credit Card",
    items: "05",
    price: "$146.99",
    total: "$749.95",
    status: {
      label: "Delivered",
      bgClass: "bg-success/10",
      textClass: "text-success",
      borderClass: "border-success/30"
    }
  },
  {
    id: "02",
    orderNo: "#TWT5015100366",
    customer: "Jaqueline Hammes",
    country: "France",
    date: "11 July, 2023",
    payment: "Paypal",
    items: "02",
    price: "$450.00",
    total: "$900.00",
    status: {
      label: "Shipping",
      bgClass: "bg-info/10",
      textClass: "text-info",
      borderClass: "border-info/30"
    }
  },
  {
    id: "03",
    orderNo: "#TWT5015100367",
    customer: "Marlene Hirthe",
    country: "Argentina",
    date: "21 Aug, 2023",
    payment: "Visa Card",
    items: "03",
    price: "$147.23",
    total: "$294.46",
    status: {
      label: "New",
      bgClass: "bg-secondary/10",
      textClass: "text-secondary",
      borderClass: "border-secondary/30"
    }
  },
  {
    id: "04",
    orderNo: "#TWT5015100368",
    customer: "Reagan Larson",
    country: "Belgium",
    date: "28 Nov, 2023",
    payment: "American Express",
    items: "01",
    price: "$579.12",
    total: "$579.12",
    status: {
      label: "Delivered",
      bgClass: "bg-success/10",
      textClass: "text-success",
      borderClass: "border-success/30"
    }
  },
  {
    id: "05",
    orderNo: "#TWT5015100369",
    customer: "Glennie Langosh",
    country: "Australia",
    date: "11 Oct, 2023",
    payment: "American Express",
    items: "01",
    price: "$349.00",
    total: "$349.00",
    status: {
      label: "Pending",
      bgClass: "bg-warning/10",
      textClass: "text-warning",
      borderClass: "border-warning/30"
    }
  },
  {
    id: "06",
    orderNo: "#TWT5015100370",
    customer: "Rickie Cremin",
    country: "United States",
    date: "16 Feb, 2023",
    payment: "COD",
    items: "03",
    price: "$89.49",
    total: "$268.47",
    status: {
      label: "Delivered",
      bgClass: "bg-success/10",
      textClass: "text-success",
      borderClass: "border-success/30"
    }
  },
  {
    id: "07",
    orderNo: "#TWT5015100371",
    customer: "Domenic Tromp",
    country: "Afghanistan",
    date: "21 Jan, 2024",
    payment: "PayPal",
    items: "02",
    price: "$739.79",
    total: "$1,479.58",
    status: {
      label: "New",
      bgClass: "bg-secondary/10",
      textClass: "text-secondary",
      borderClass: "border-secondary/30"
    }
  }
];
}
