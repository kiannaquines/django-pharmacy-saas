import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import { ProductSidebar } from "./components/product-sidebar/product-sidebar";
import { ProductNav } from "./components/product-nav/product-nav";
import { Products } from './components/products/products';
import { Pagination } from "../../../components/pagination/pagination";
import { PageTitle } from "../../../components/page-title/page-title";


@Component({
  selector: 'app-product-grid',
  imports: [RouterLink, NgIcon, ProductSidebar, ProductNav, Products, Pagination, PageTitle],
  templateUrl: './product-grid.html',
  styles: ``
})
export class ProductGrid {

}
