import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";

type Product = {
  name: string;
  image: string;
  cartCount: string;
}

@Component({
  selector: 'app-selling-product',
  imports: [NgIcon, RouterLink ],
  templateUrl: './selling-product.html',
  styles: ``
})
export class SellingProduct {
   
  products: Product[] = [
  {
    name: "Mesh Ergonomic Black Chair",
    image: "assets/images/product/img-02.png",
    cartCount: "798"
  },
  {
    name: "Fastcolors Typography Men",
    image: "assets/images/product/img-03.png",
    cartCount: "695"
  },
  {
    name: "Mesh Ergonomic Green Chair",
    image: "assets/images/product/img-04.png",
    cartCount: "985"
  },
  {
    name: "Techel Black Bluetooth Soundbar",
    image: "assets/images/product/img-05.png",
    cartCount: "813"
  },
  {
    name: "Bovet Fleurier AIFSQ029",
    image: "assets/images/product/img-06.png",
    cartCount: "915"
  },
  {
    name: "Fastcolors Typography Men",
    image: "assets/images/product/img-03.png",
    cartCount: "785"
  }
];

}
