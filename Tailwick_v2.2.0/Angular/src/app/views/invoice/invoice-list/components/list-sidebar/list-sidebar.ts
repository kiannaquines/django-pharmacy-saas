import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import { SimplebarAngularModule } from "simplebar-angular";

type InvoiceItem = {
  id: string;
  name: string;
  amount: string;
  date: string;
  status: "Paid" | "Unpaid" | "Cancel" | "Refund";
  statusClass: string;
}


@Component({
  selector: 'app-list-sidebar',
  imports: [RouterLink, NgIcon, SimplebarAngularModule],
  templateUrl: './list-sidebar.html',
  styles: ``
})
export class ListSidebar {
  invoiceData: InvoiceItem[] = [
    {
      id: "#TW15090251",
      name: "Paula Keenan",
      amount: "$873.96",
      date: "21 Jan, 2024",
      status: "Unpaid",
      statusClass: "text-warning bg-warning/20"
    },
    {
      id: "#TW15090252",
      name: "Jaqueline Hammes",
      amount: "$1,203.74",
      date: "27 Oct, 2023",
      status: "Paid",
      statusClass: "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success"
    },
    {
      id: "#TW15090253",
      name: "Akeem Paucek",
      amount: "$1,423.10",
      date: "04 Feb, 2024",
      status: "Paid",
      statusClass: "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success"
    },
    {
      id: "#TW15090254",
      name: "Stephon Trantow",
      amount: "$1,420.99",
      date: "14 July, 2023",
      status: "Cancel",
      statusClass: "text-danger bg-danger/10"
    },
    {
      id: "#TW15090255",
      name: "Domenic Tromp",
      amount: "$247.18",
      date: "11 April, 2023",
      status: "Refund",
      statusClass: "text-default-600 bg-default-200"
    },
    {
      id: "#TW15090256",
      name: "Marie Prohaska",
      amount: "$559.32",
      date: "03 Aug, 2023",
      status: "Paid",
      statusClass: "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success"
    },
    {
      id: "#TW15090257",
      name: "Ethel Corwin",
      amount: "$2,147.65",
      date: "15 Dec, 2024",
      status: "Unpaid",
      statusClass: "text-warning bg-warning/10"
    }
  ];
}
