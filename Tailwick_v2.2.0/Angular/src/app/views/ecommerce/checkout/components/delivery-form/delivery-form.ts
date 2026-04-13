import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type DeliveryOption = {
  id: number;
  name: string;
  expectedDelivery: string;
  price: number;
  image: string;
  selected?: boolean; 
}

@Component({
  selector: 'app-delivery-form',
  imports: [FormsModule],
  templateUrl: './delivery-form.html',
  styles: ``
})

export class DeliveryForm {

  selectedDeliveryId: number = 1;
   
  deliveryOptions: DeliveryOption[] = [
  {
    id: 1,
    name: 'Express Delivery',
    expectedDelivery: '01 Nov, Wednesday',
    price: 11.99,
    image: 'assets/images/brand/delivery-1.png',
    selected: true
  },
  {
    id: 2,
    name: 'Air Logistic Delivery',
    expectedDelivery: '06 Nov, Monday',
    price: 5,
    image: 'assets/images/brand/delivery-2.png'
  },
  {
    id: 3,
    name: 'Free Delivery',
    expectedDelivery: '11 Nov, Saturday',
    price: 0,
    image: 'assets/images/brand/delivery-3.png'
  }
];


}
