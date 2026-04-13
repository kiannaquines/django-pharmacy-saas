import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon } from "@ng-icons/core";

type CartItem = {
  id: number;
  name: string;
  link: string;
  image: string;
  price: number;
  total: number;
  quantity: number;
}

type AdditionalService = {
  id: number;
  name: string;
  description: string;
  price: number;
  selected: boolean;
}

@Component({
  selector: 'app-checkout-sidebar',
  imports: [NgIcon, FormsModule ],
  templateUrl: './checkout-sidebar.html',
  styles: ``
})
export class CheckoutSidebar {
  
  cartItems: CartItem[] = [
  {
    id: 1,
    name: 'Roar Twill Blue Baseball Cap',
    link: '/e-commerce/product-overview',
    image: 'assets/images/product/img-08.png',
    price: 149.99,
    total: 299.98,
    quantity: 2
  },
  {
    id: 2,
    name: 'Mesh Ergonomic Green Chair',
    link: '/e-commerce/product-overview',
    image: 'assets/images/product/img-04.png',
    price: 362.21,
    total: 362.21,
    quantity: 1
  },
  {
    id: 3,
    name: 'Smartest Printed T-shirt',
    link: '/e-commerce/product-overview',
    image: 'assets/images/product/img-01.png',
    price: 89.99,
    total: 269.97,
    quantity: 3
  }
];

 additionalServices: AdditionalService[] = [
  {
    id: 1,
    name: 'Care + Package',
    description: '2 year of additional care',
    price: 24.99,
    selected: false
  },
  {
    id: 2,
    name: 'Environment Friendly',
    description: 'The primary goal of eco-warriors is creating',
    price: 19.99,
    selected: false
  }
];

}
