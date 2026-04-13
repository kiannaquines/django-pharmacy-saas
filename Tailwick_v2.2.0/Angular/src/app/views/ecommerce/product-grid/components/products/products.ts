import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";

interface Product {
  id: number;
  image: string;
  name: string;
  rating: number;
  ratingCount: number;
  price: number;
  oldPrice?: number;
  isFavorite: boolean;
}
@Component({
  selector: 'app-products',
  imports: [RouterLink, NgIcon],
  templateUrl: './products.html',
  styles: ``
})

export class Products {

  products: Product[] = [
    {
      id: 1,
      image: 'assets/images/product/img-02.png',
      name: 'Mesh Ergonomic Black Chair',
      rating: 4.5,
      ratingCount: 198,
      price: 674.12,
      oldPrice: 784.09,
      isFavorite: true,
    },
    {
      id: 2,
      image: 'assets/images/product/img-03.png',
      name: 'Fastcolors Typography Men',
      rating: 4.5,
      ratingCount: 1150,
      price: 341.99,
      oldPrice: 784.09,
      isFavorite: false,
    },
    {
      id: 3,
      image: 'assets/images/product/img-04.png',
      name: 'Mesh Ergonomic Green Chair',
      rating: 3.5,
      ratingCount: 29,
      price: 362.2,
      oldPrice: 599.99,
      isFavorite: false,
    },
    {
      id: 4,
      image: 'assets/images/product/img-05.png',
      name: 'Techel Black Bluetooth Sound.',
      rating: 4.5,
      ratingCount: 1324,
      price: 249.99,
      oldPrice: 399.99,
      isFavorite: true,
    },
    {
      id: 5,
      image: 'assets/images/product/img-06.png',
      name: 'Bovet Fleurier AIFSQ029',
      rating: 4.5,
      ratingCount: 1324,
      price: 496.16,
      isFavorite: false,
    },
    {
      id: 6,
      image: 'assets/images/product/img-08.png',
      name: 'Roar Twill Blue Baseball Cap',
      rating: 2.5,
      ratingCount: 485,
      price: 674.12,
      oldPrice: 784.99,
      isFavorite: true,
    },
    {
      id: 7,
      image: 'assets/images/product/img-01.png',
      name: 'Smartest Printed T-shirt',
      rating: 3.5,
      ratingCount: 5321,
      price: 89.99,
      isFavorite: false,
    },
    {
      id: 8,
      image: 'assets/images/product/img-10.png',
      name: 'Crop tops for Women western.',
      rating: 4.5,
      ratingCount: 1551,
      price: 145,
      oldPrice: 299.99,
      isFavorite: true,
    }
  ];
}
