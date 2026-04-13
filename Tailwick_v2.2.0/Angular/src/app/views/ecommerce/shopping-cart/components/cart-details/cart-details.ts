import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";

type CartItem = {
  id: number;
  image: string;
  title: string;
  category: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  originalPrice?: number; 
  total: number;
}

@Component({
  selector: 'app-cart-details',
  imports: [NgIcon, RouterLink],
  templateUrl: './cart-details.html',
  styles: ``
})

export class CartDetails {

  cartItems: CartItem[] = [
  {
    id: 1,
    image: "assets/images/product/img-08.png",
    title: "Roar Twill Blue Baseball Cap",
    category: "Men's Fashion",
    color: "White/Blue",
    size: "L",
    quantity: 2,
    price: 149.99,
    originalPrice: 299.99,
    total: 299
  },
  {
    id: 2,
    image: "assets/images/product/img-04.png",
    title: "Mesh Ergonomic Green Chair",
    category: "Home, Kitchen, Pets",
    color: "Green/Blue",
    size: "M",
    quantity: 2,
    price: 362.21,
    originalPrice: 599.99,
    total: 362.21
  },
  {
    id: 3,
    image: "assets/images/product/img-01.png",
    title: "Smartest Printed T-shirt",
    category: "Unisex Fashion",
    color: "Black/Blue",
    size: "M",
    quantity: 2,
    price: 89.99,
    total: 269.97
  }
];

increaseQty(item: CartItem) {
    if (item.quantity < 100) {
      item.quantity++;
      this.updateTotal(item);
    }
  }

  decreaseQty(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateTotal(item);
    }
  }

  updateTotal(item: CartItem) {
    item.total = +(item.quantity * item.price).toFixed(2);
  }

}
