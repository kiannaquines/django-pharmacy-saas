import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";

type Customer = {
  name: string;
  email: string;
  avatar: string;
  amount: string;
}

@Component({
  selector: 'app-customer-services',
  imports: [NgIcon, RouterLink],
  templateUrl: './customer-services.html',
  styles: ``
})

export class CustomerServices {
  topCustomers: Customer[] = [
  {
    name: "Urrie Arthur",
    email: "arthur@tailwick.com",
    avatar: "assets/images/user/avatar-2.png",
    amount: "$2,452"
  },
  {
    name: "Natalie Christy",
    email: "natalie@tailwick.com",
    avatar: "assets/images/user/avatar-3.png",
    amount: "$1,893"
  },
  {
    name: "Laurie Jackson",
    email: "jackson@tailwick.com",
    avatar: "assets/images/user/avatar-4.png",
    amount: "$1,196"
  },
  {
    name: "Michael Torres",
    email: "torres@tailwick.com",
    avatar: "assets/images/user/avatar-5.png",
    amount: "$976"
  }
];
}
