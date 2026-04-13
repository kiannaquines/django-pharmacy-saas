import { Component } from '@angular/core';
import { Pagination } from "../../../../components/pagination/pagination";
import { NgIcon } from "@ng-icons/core";
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';
import { RouterLink } from '@angular/router';
import { PageTitle } from "../../../../components/page-title/page-title";

type PaymentRow = {
  id: string;
  license: string;
  date: string;
  method: string;
  customer: string;
  amount: string;
  status: "Paid" | "Pending" | "Failed";
  statusClass: string;
  dotClass: string;
}


@Component({
  selector: 'app-payments',
  imports: [Pagination, NgIcon, FlatpickrDirective, RouterLink, PageTitle],
  templateUrl: './payments.html',
  providers: [provideFlatpickrDefaults()],
  styles: ``
})
export class Payments {
 paymentData: PaymentRow[] = [
    {
      id: "#TWP10021320",
      license: "Regular License",
      date: "02 July, 2023",
      method: "PayPal",
      customer: "Infra Teach",
      amount: "$2,403",
      status: "Paid",
      statusClass: "bg-success/15 text-success",
      dotClass: "bg-success"
    },
    {
      id: "#TWP10021321",
      license: "Extended License",
      date: "08 Nov, 2023",
      method: "Credit Card",
      customer: "Kim Broberg",
      amount: "$1,341",
      status: "Pending",
      statusClass: "bg-warning/15 text-warning",
      dotClass: "bg-warning"
    },
    {
      id: "#TWP10021322",
      license: "Extended License",
      date: "11 Aug, 2023",
      method: "Bank Transfer",
      customer: "Everett Moore",
      amount: "$816.21",
      status: "Failed",
      statusClass: "bg-danger/15 text-danger",
      dotClass: "bg-danger"
    },
    {
      id: "#TWP10021323",
      license: "Regular License",
      date: "20 Sep, 2023",
      method: "PayPal",
      customer: "Omari Welch",
      amount: "$1,184",
      status: "Paid",
      statusClass: "bg-success/15 text-success",
      dotClass: "bg-success"
    },
    {
      id: "#TWP10021324",
      license: "Regular License",
      date: "07 Oct, 2023",
      method: "Debit Card",
      customer: "Susana Dooley",
      amount: "$5,463",
      status: "Paid",
      statusClass: "bg-success/15 text-success",
      dotClass: "bg-success"
    },
    {
      id: "#TWP10021325",
      license: "Regular License",
      date: "18 Dec, 2023",
      method: "PayPal",
      customer: "Paul Gerhold",
      amount: "$3,463",
      status: "Pending",
      statusClass: "bg-warning/15 text-warning",
      dotClass: "bg-warning"
    },
    {
      id: "#TWP10021326",
      license: "Extended License",
      date: "21 Jan, 2024",
      method: "Bank Transfer",
      customer: "Lucie Beahan",
      amount: "$1,543",
      status: "Failed",
      statusClass: "bg-danger/15 text-danger",
      dotClass: "bg-danger"
    },
    {
      id: "#TWP10021327",
      license: "Regular License",
      date: "02 Feb, 2023",
      method: "PayPal",
      customer: "Jose White",
      amount: "$4,177",
      status: "Paid",
      statusClass: "bg-success/15 text-success",
      dotClass: "bg-success"
    },
    {
      id: "#TWP10021328",
      license: "Extended License",
      date: "11 Dec, 2023",
      method: "Debit Card",
      customer: "Jonas Frederiksen",
      amount: "$2,307",
      status: "Pending",
      statusClass: "bg-warning/15 text-warning",
      dotClass: "bg-warning"
    },
    {
      id: "#TWP10021329",
      license: "Extended License",
      date: "01 Jan, 2023",
      method: "PayPal",
      customer: "Stephen Tillman",
      amount: "$543.99",
      status: "Paid",
      statusClass: "bg-success/15 text-success",
      dotClass: "bg-success"
    }
  ];
}
