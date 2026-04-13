import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import { Counter } from "../counter/counter";

interface ServicesCard {
  image: string;
  tag: {
    label: string;
    class: string;
  };
  title: string;
  description: string;
  link: string[];
}

@Component({
  selector: 'app-services',
  imports: [NgIcon, RouterLink, Counter],
  templateUrl: './services.html',
  styles: ``
})

export class Services {
   servicesCards: ServicesCard[] = [
  {
    image: 'assets/images/landing/chat.jpg',
    tag: {
      label: 'Popular Apps',
      class: 'inline-flex items-center py-0.5 px-2.5 rounded text-xs font-medium border border-primary/30 bg-primary/15 text-primary'
    },
    title: 'Chat with Client & Employee',
    description:
      'A chat UI, or user interface, is one of the first things users see when using a web or mobile application to communicate.',
    link: []
  },
  {
    image: 'assets/images/landing/email.jpg',
    tag: {
      label: 'Email Apps',
      class: 'inline-flex items-center py-0.5 px-2.5 rounded text-xs font-medium border border-secondary/30 bg-secondary/15 text-secondary'
    },
    title: 'Exciting New Features Await You',
    description:
      'A chat UI, or user interface, is one of the first things users see when using a web or mobile application to communicate.',
    link: []
  },
  {
    image: 'assets/images/landing/order-overview.jpg',
    tag: {
      label: 'HR Management',
      class: 'inline-flex items-center py-0.5 px-2.5 rounded text-xs font-medium border border-danger/20 bg-danger/15 text-danger'
    },
    title: 'Unleash Your Creativity with Our Latest Tools',
    description:
      'A chat UI, or user interface, is one of the first things users see when using a web or mobile application to communicate.',
    link: []
  }
];
}
