import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { SallersModal } from "./components/sallers-modal/sallers-modal";
import { Pagination } from "../../../components/pagination/pagination";
import { PageTitle } from "../../../components/page-title/page-title";
import { RouterLink } from '@angular/router';

type CardItem = {
  name: string;
  owner: string;
  icon: string;
  heartFilled?: boolean;
  stats: {
    label: string;
    value: string;
  }[];
}

@Component({
  selector: 'app-sallers',
  imports: [NgIcon, SallersModal, Pagination, PageTitle, RouterLink],
  templateUrl: './sallers.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Sallers {

  cardsData: CardItem[] = [
    {
      name: 'Themesdesign',
      owner: 'Paula Keenan',
      icon: 'logos:google-adwords',
      heartFilled: true,
      stats: [
        { label: 'Sales', value: '4.5k' },
        { label: 'Product', value: '310' },
        { label: 'Revenue', value: '$235.3k' },
      ],
    },
    {
      name: 'Nazox Fashion',
      owner: 'Kara Miller',
      icon: 'logos:apple-app-store',
      heartFilled: true,
      stats: [
        { label: 'Sales', value: '2.3k' },
        { label: 'Product', value: '67' },
        { label: 'Revenue', value: '$235.3k' },
      ],
    },
    {
      name: '4xM Infotech',
      owner: 'Daniel Miller',
      icon: 'logos:google-gmail',
      heartFilled: false,
      stats: [
        { label: 'Sales', value: '7.1k' },
        { label: 'Product', value: '138' },
        { label: 'Revenue', value: '$465.9k' },
      ],
    },
    {
      name: 'Extra Fashion',
      owner: 'Mark Walton',
      icon: 'logos:android-icon',
      heartFilled: true,
      stats: [
        { label: 'Sales', value: '1.9k' },
        { label: 'Product', value: '49' },
        { label: 'Revenue', value: '$198.3k' },
      ],
    },
    {
      name: 'Nesta Technologies',
      owner: 'William Heineman',
      icon: 'logos:figma',
      heartFilled: true,
      stats: [
        { label: 'Sales', value: '4.8k' },
        { label: 'Product', value: '172' },
        { label: 'Revenue', value: '$746.1k' },
      ],
    },
    {
      name: 'Digitech Galaxy',
      owner: 'David Biggs',
      icon: 'logos:meta-icon',
      heartFilled: false,
      stats: [
        { label: 'Sales', value: '9.2k' },
        { label: 'Product', value: '674' },
        { label: 'Revenue', value: '$14.4m' },
      ],
    },
    {
      name: 'Zoetic Fashion',
      owner: 'Jaqueline Hammes',
      icon: 'logos:google-icon',
      heartFilled: false,
      stats: [
        { label: 'Sales', value: '1.8k' },
        { label: 'Product', value: '112' },
        { label: 'Revenue', value: '$132.4k' },
      ],
    },
    {
      name: 'Force Medicines',
      owner: 'Ashley Uilson',
      icon: 'logos:telegram',
      heartFilled: false,
      stats: [
        { label: 'Sales', value: '4.1k' },
        { label: 'Product', value: '243' },
        { label: 'Revenue', value: '$861.7k' },
      ],
    },
  ];

}
