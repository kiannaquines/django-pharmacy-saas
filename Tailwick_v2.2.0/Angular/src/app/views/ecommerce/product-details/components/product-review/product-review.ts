import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";

type Review = {
  userName: string;
  avatar: string;
  date: string;
  reviewText: string;
  rating: number;   
  likes: number;
  dislikes: number;
}

@Component({
  selector: 'app-product-review',
  imports: [NgIcon, RouterLink],
  templateUrl: './product-review.html',
  styles: ``
})

export class ProductReview {
  reviews: Review[] = [
    {
      userName: 'Aubrey Beer',
      avatar: 'assets/images/user/avatar-2.png',
      date: '14 Jan, 2024',
      reviewText: 'Nice product good quality and looking',
      rating: 4.5,
      likes: 15,
      dislikes: 3,
    },
    {
      userName: 'Theodora Jones',
      avatar: 'assets/images/user/avatar-11.png',
      date: '20 July, 2023',
      reviewText: 'Amazing! Fast, to the point, professional and really amazing to work with them!!!',
      rating: 4,
      likes: 77,
      dislikes: 26,
    },
    {
      userName: 'Jordane Dare',
      avatar: 'assets/images/user/avatar-5.png',
      date: '07 Dec, 2023',
      reviewText: 'Very nice design. Clean Code and easy customizable',
      rating: 5,
      likes: 31,
      dislikes: 9,
    },
    {
      userName: 'avern Ratke',
      avatar: 'assets/images/user/avatar-8.png',
      date: '10 Aug, 2023',
      reviewText:
        'The best templates which is supported multiple programming languages with beautiful templates. thank you for the valuable template.',
      rating: 4.5,
      likes: 49,
      dislikes: 17,
    },
  ];
}
