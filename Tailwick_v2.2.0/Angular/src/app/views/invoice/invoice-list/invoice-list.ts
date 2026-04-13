import { Component } from '@angular/core';
import { ListSidebar } from "./components/list-sidebar/list-sidebar";
import { ListOverview } from "./components/list-overview/list-overview";
import { NgIcon } from "@ng-icons/core";
import { RouterLink } from '@angular/router';
import { PageTitle } from "../../../components/page-title/page-title";

@Component({
  selector: 'app-invoice-list',
  imports: [ListSidebar, ListOverview, NgIcon, RouterLink, PageTitle],
  templateUrl: './invoice-list.html',
  styles: ``
})
export class InvoiceList {

}
