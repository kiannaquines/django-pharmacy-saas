import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";

 type ColorOption = {
  id: string;
  border: string;
  bg: string;
  checked: string;
}

 type PriceFilter = {
  id: string;
  label: string;
}

 type CategoryFilter = {
  id: string;
  label: string;
}

type RatingFilter = {
  id: string;
  label: string;
  stars?: number; 
}

type GenderFilter = {
  id: string;
  label: string;
  value: string;
}

@Component({
  selector: 'app-product-sidebar',
  imports: [NgIcon],
  templateUrl: './product-sidebar.html',
  styles: ``
})

export class ProductSidebar {
   
  colors: ColorOption[] = [
    { id: 'color1', border: 'border-primary', bg: 'bg-primary', checked: 'checked:bg-primary checked:border-primary' },
    { id: 'color2', border: 'border-red-300', bg: 'bg-red-300', checked: 'checked:bg-red-300 checked:border-red-300' },
    { id: 'color3', border: 'border-green-300', bg: 'bg-green-300', checked: 'checked:bg-green-300 checked:border-green-300' },
    { id: 'color4', border: 'border-default-500', bg: 'bg-default-500', checked: 'checked:bg-default-500 checked:border-default-500' },
    { id: 'color5', border: 'border-purple-500', bg: 'bg-purple-500', checked: 'checked:bg-purple-500 checked:border-purple-500' },
    { id: 'color6', border: 'border-sky-500', bg: 'bg-sky-500', checked: 'checked:bg-sky-500 checked:border-sky-500' },
    { id: 'color7', border: 'border-yellow-500', bg: 'bg-yellow-500', checked: 'checked:bg-yellow-500 checked:border-yellow-500' },
    { id: 'color8', border: 'border-green-500', bg: 'bg-green-500', checked: 'checked:bg-green-500 checked:border-green-500' },
    { id: 'color9', border: 'border-default-800', bg: 'bg-default-800', checked: 'checked:bg-default-800 checked:border-default-800' },
    { id: 'color10', border: 'border-default-200', bg: 'bg-default-200', checked: 'checked:bg-default-200 checked:border-default-200' },
    { id: 'color11', border: 'border-emerald-300', bg: 'bg-emerald-300', checked: 'checked:bg-emerald-300 checked:border-emerald-300' },
  ];

  priceFilters: PriceFilter[] = [
    { id: 'priceAll', label: 'All' },
    { id: 'price1', label: '$0.00 – $110.00' },
    { id: 'price2', label: '$110.00 – $220.00' },
    { id: 'price3', label: '$220 – $330' },
    { id: 'price4', label: '$330 – $550' },
    { id: 'price5', label: '$550+' },
    { id: 'price6', label: 'Low to High' },
    { id: 'price7', label: 'High to Low' },
  ];

    categories: CategoryFilter[] = [
    { id: 'categoryAll', label: 'All' },
    { id: 'category1', label: 'Mobiles, Computers' },
    { id: 'category2', label: 'TV, Appliances, Electronics' },
    { id: 'category3', label: "Men's Fashion" },
    { id: 'category4', label: "Women's Fashion" },
    { id: 'category5', label: 'Home, Kitchen, Pets' },
    { id: 'category6', label: 'Beauty, Health, Grocery' },
    { id: 'category7', label: 'Books' },
  ];

  ratings: RatingFilter[] = [
    { id: 'ratingAll', label: 'All' },
    { id: 'rating5', label: '5 Rating', stars: 1 },
    { id: 'rating4', label: '4 Rating and Up', stars: 1 },
    { id: 'rating3', label: '3 Rating and Up', stars: 1 },
    { id: 'rating2', label: '2 Rating and Up', stars: 1 },
    { id: 'rating1', label: '1 Rating and Up', stars: 1 },
    { id: 'rating0', label: '0 Rating', stars: 1 },
  ];

  genders: GenderFilter[] = [
    { id: 'genderAll', label: 'All', value: 'all' },
    { id: 'genderMale', label: 'Male', value: 'male' },
    { id: 'genderFemale', label: 'Female', value: 'female' },
    { id: 'genderOther', label: 'Other', value: 'other' },
  ];

}
