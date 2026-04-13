import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { ProductSidebar } from "./components/product-sidebar/product-sidebar";
import { RouterLink } from '@angular/router';
import { ProductReview } from "./components/product-review/product-review";
import { PageTitle } from "../../../components/page-title/page-title";

type ColorOption = {
  id: string;
  name: string;   
  class: string;  
  value: string; 
}

type SizeOption = {
  label: string;   
  value: string;   
  active?: boolean; 
}

type Offer = {
  title: string;       
  description: string; 
  linkText: string;    
  link: string | any[]; 
}

type ProductDetail = {
  label: string; 
  value: string; 
}

@Component({
  selector: 'app-product-details',
  imports: [NgIcon, ProductSidebar, RouterLink, ProductReview, PageTitle],
  templateUrl: './product-details.html',
  styles: ``
})

export class ProductDetails {
   colors: ColorOption[] = [
    { id: 'color1', name: 'SelectColor', class: 'text-primary', value: 'primary' },
    { id: 'color2', name: 'SelectColor', class: 'text-red-300', value: 'red-300' },
    { id: 'color3', name: 'SelectColor', class: 'text-green-300', value: 'green-300' },
    { id: 'color4', name: 'SelectColor', class: 'text-default-500', value: 'default-500' },
    { id: 'color5', name: 'SelectColor', class: 'text-purple-500', value: 'purple-500' },
    { id: 'color6', name: 'SelectColor', class: 'text-sky-500', value: 'sky-500' },
    { id: 'color7', name: 'SelectColor', class: 'text-yellow-500', value: 'yellow-500' },
    { id: 'color8', name: 'SelectColor', class: 'text-green-500', value: 'green-500' },
    { id: 'color9', name: 'SelectColor', class: 'text-default-800', value: 'default-800' },
    { id: 'color10', name: 'SelectColor', class: 'text-default-200', value: 'default-200' },
    { id: 'color11', name: 'SelectColor', class: 'text-emerald-300', value: 'emerald-300' },
  ];

  sizes: SizeOption[] = [
    { label: 'XS', value: 'xs' },
    { label: 'S', value: 's', active: true },
    { label: 'M', value: 'm' },
    { label: 'L', value: 'l' },
    { label: 'XL', value: 'xl' },
    { label: '2XL', value: '2xl' },
  ];

  offers: Offer[] = [
    {
      title: 'Bank Offer',
      description: '10% Instant Discount on Paypal, up to $1250 on orders of $5,000 and above',
      linkText: 'T&C',
      link: [],
    },
    {
      title: 'Special Price',
      description: 'Get at flat $199',
      linkText: 'T&C',
      link: [],
    },
    {
      title: 'Partner Offer',
      description: 'Purchase now & get 1 surprise cashback coupon in Future',
      linkText: 'Know More',
      link: [],
    },
    {
      title: 'Bank Offer',
      description: "UPI Offer Men's Clothing",
      linkText: 'T&C',
      link: [],
    },
  ];

  productDetails: ProductDetail[] = [
    { label: 'Type', value: 'Round Neck' },
    { label: 'Sleeve', value: 'Half Sleeve' },
    { label: 'Fit', value: 'Regular' },
    { label: 'Fabric', value: 'Cotton Blend' },
    { label: 'Pack of', value: '1' },
    { label: 'Product Code', value: 'TWT1542' },
    { label: 'Ideal for', value: 'Women' },
  ];

}

