import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { register } from 'swiper/element/bundle';

register();

type Testimonial = {
  img: string;
  bgClass: string;
  message: string;
  name: string;
  rating: number;
};

@Component({
  selector: 'app-feedback',
  imports: [NgIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './feedback.html',
  styles: '',
})

export class Feedback {
  testimonials: Testimonial[] = [
    {
      img: 'assets/images/user/avatar-9.png',
      bgClass: 'bg-purple-500/10',
      message: `"ThemesDesign used Anydesk to fix the bug in Flask and django version. I highly recommend this product! "`,
      name: 'Anthony Hobbs',
      rating: 5,
    },
    {
      img: 'assets/images/user/avatar-2.png',
      bgClass: 'bg-primary/10',
      message: `" The best templates which is supported multiple programming languages with beautiful templates. thank you for the valuable template. "`,
      name: 'Angela Ulligan',
      rating: 5,
    },
    {
      img: 'assets/images/user/avatar-4.png',
      bgClass: 'bg-amber-500/10',
      message: `" I encountered a few errors in the design of the product detail page in Angular. I contacted the support team and they established. "`,
      name: 'muratoztrkk01',
      rating: 5,
    },
    {
      img: 'assets/images/user/avatar-7.png',
      bgClass: 'bg-danger/10',
      message: `" This theme is very good. I really recommend it. It's very good optimized, elegant, well documented, etc. "`,
      name: 'Christine Marbury',
      rating: 5,
    },
   
  ];
}
