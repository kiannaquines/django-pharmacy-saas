import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type CartItem = {
  id: number;
  name: string;
  link: string;
  image: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

@Component({
  selector: 'app-order-summary',
  imports: [RouterLink],
  templateUrl: './order-summary.html',
  styles: ``
})
export class OrderSummary {
  cartItems: CartItem[] = [
  {
    id: 1,
    name: 'Roar Twill Blue Baseball Cap',
    link: '/e-commerce/product-overview',
    image: 'assets/images/product/img-08.png',
    unitPrice: 149.99,
    quantity: 2,
    totalPrice: 299.98
  },
  {
    id: 2,
    name: 'Mesh Ergonomic Green Chair',
    link: '/e-commerce/product-overview',
    image: 'assets/images/product/img-04.png',
    unitPrice: 362.21,
    quantity: 1,
    totalPrice: 362.21
  },
  {
    id: 3,
    name: 'Smartest Printed T-shirt',
    link: '/e-commerce/product-overview',
    image: 'assets/images/product/img-01.png',
    unitPrice: 89.99,
    quantity: 3,
    totalPrice: 269.97
  }
];
}
