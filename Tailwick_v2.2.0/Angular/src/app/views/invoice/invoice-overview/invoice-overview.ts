import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import { PageTitle } from "../../../components/page-title/page-title";

type ProductRow = {
  id: number;
  title: string;
  description: string;
  price: string;
  quantity: number;
  total: string;
}

@Component({
  selector: 'app-invoice-overview',
  imports: [NgIcon, RouterLink, PageTitle],
  templateUrl: './invoice-overview.html',
  styles: ``
}) 

export class InvoiceOverview {
  productTableData: ProductRow[] = [
    {
      id: 1,
      title: "Webadmin - Premium Admin & Dashboard",
      description: "Build with Bootstrap, React JS, Angular, Vue etc.",
      price: "$24.00",
      quantity: 2,
      total: "$48"
    },
    {
      id: 2,
      title: "Webadmin - Admin & Dashboard",
      description: "Build with Bootstrap, React JS, Angular, Vue etc.",
      price: "$25.00",
      quantity: 4,
      total: "$100"
    },
    {
      id: 3,
      title: "Tocly - Admin & Dashboard",
      description: "Build with Bootstrap, React JS, Angular, Vue etc.",
      price: "$16.00",
      quantity: 9,
      total: "$144"
    }
  ];
}
