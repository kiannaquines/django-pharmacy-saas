import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import {FlatpickrDirective, provideFlatpickrDefaults} from 'angularx-flatpickr';
import { Pagination } from "../../../components/pagination/pagination";
import { PageTitle } from "../../../components/page-title/page-title";

type ProductItem = {
  id: string;
  name: string;
  category: string;
  price: string;
  quantity: number;
  total: string;
  status: 'Publish' | 'Scheduled';
  img: string;
}

@Component({
  selector: 'app-products',
  imports: [NgIcon, RouterLink, FlatpickrDirective, Pagination, PageTitle],
  templateUrl: './products.html',
     providers: [provideFlatpickrDefaults()],
  styles: ``
})

export class Products {

  productTitleData: string[] = [
     "Product Code",
     "Product Name",
     "Category",
     "Price",
     "Stock",
     "Revenue",
     "Status",
     "Action"
  ]

  productData: ProductItem[] = [
    {
      id: '#TAD-232100071',
      name: 'Smartest Printed T-shirt',
      category: 'Fashion',
      price: '$79.99',
      quantity: 500,
      total: '$24,365',
      status: 'Scheduled',
      img: 'assets/images/product/img-01.png'
    },
    {
      id: '#TAD-232100074',
      name: 'Techel Black Bluetooth Soundbar',
      category: 'Electronics',
      price: '$452.99',
      quantity: 300,
      total: '$49,234',
      status: 'Publish',
      img: 'assets/images/product/img-06.png'
    },
    {
      id: '#TAD-232100075',
      name: 'Bovet Fleurier AIFSQ029',
      category: 'Home Decor',
      price: '$119.99',
      quantity: 240,
      total: '$20,784',
      status: 'Publish',
      img: 'assets/images/product/img-07.png'
    },
    {
      id: '#TAD-232100077',
      name: 'Roar Twill Blue Baseball Cap',
      category: 'Fashion',
      price: '$49.99',
      quantity: 470,
      total: '$19,321',
      status: 'Publish',
      img: 'assets/images/product/img-09.png'
    },
    {
      id: '#TAD-232100080',
      name: 'Aahwan Solid Women Beige Baggy Shorts',
      category: 'Fashion',
      price: '$64.70',
      quantity: 150,
      total: '$13,987',
      status: 'Publish',
      img: 'assets/images/product/img-08.png'
    },
    {
      id: '#TAD-232100072',
      name: 'Mesh Ergonomic Black Chair',
      category: 'Furniture',
      price: '$214.47',
      quantity: 400,
      total: '$1,24,365',
      status: 'Publish',
      img: 'assets/images/product/img-03.png'
    },
    {
      id: '#TAD-232100071',
      name: 'Smartest Printed T-shirt',
      category: 'Fashion',
      price: '$79.99',
      quantity: 500,
      total: '$24,365',
      status: 'Scheduled',
      img: 'assets/images/product/img-02.png'
    }
  ];

}
