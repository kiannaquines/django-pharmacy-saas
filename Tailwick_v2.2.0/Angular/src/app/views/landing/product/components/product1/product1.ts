import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";

type ProductType = {
  image: string;
  rating: number;
  name: string;
  price: string;
  routerLink: []; 
}

@Component({
  selector: 'app-product1',
  imports: [NgIcon, RouterLink],
  templateUrl: './product1.html',
  styles: ``
})
export class Product1 {
   products: ProductType[] = [
  {
    image: 'assets/images/landing/img-16.png',
    rating: 4.8,
    name: 'Green Sneakers Skate',
    price: '$299.99',
    routerLink: []
  },
  {
    image: 'assets/images/landing/img-17.png',
    rating: 4.4,
    name: 'Nike Running Shoes',
    price: '$129.49',
    routerLink: []
  },
  {
    image: 'assets/images/landing/img-18.png',
    rating: 4.9,
    name: 'Nike Air Max Sneakers Shoe',
    price: '$149.99',
    routerLink: []
  },
  {
    image: 'assets/images/landing/img-19.png',
    rating: 4.6,
    name: 'Dunk Sneakers Skate shoe',
    price: '$174.65',
    routerLink: []
  }
];
}
