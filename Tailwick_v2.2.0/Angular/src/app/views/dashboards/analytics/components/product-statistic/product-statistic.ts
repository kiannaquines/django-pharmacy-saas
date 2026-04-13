import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { Pagination } from "../../../../../components/pagination/pagination";

type Product = {
  name: string;
  price: string;
  income: string;
  sales: string;
  view: string;
  click: string;
  clickPercent: string;
  status: 'Active' | 'Unactive';
  statusIcon: 'lucideCircleCheck' | 'lucideCircleX';
  statusColor: 'success' | 'danger';
}

@Component({
  selector: 'app-product-statistic',
  imports: [NgIcon, CommonModule, Pagination],
  templateUrl: './product-statistic.html',
  styles: ``
})

export class ProductStatistic {

   products: Product[] = [
    {
      name: "SmartTech Pro-4K Ultra HD TV",
      price: "$1,542.99",
      income: "$12.36k",
      sales: "3,217",
      view: "21,451",
      click: "16,287",
      clickPercent: "39.56%",
      status: "Active",
      statusIcon: "lucideCircleCheck",
      statusColor: "success"
    },
    {
      name: "LuxeLeather Vintage Messenger Bag",
      price: "$699.99",
      income: "$22.88k",
      sales: "7,321",
      view: "32,151",
      click: "27,485",
      clickPercent: "87.33%",
      status: "Active",
      statusIcon: "lucideCircleCheck",
      statusColor: "success"
    },
    {
      name: "InfinityGlow LED Desk Lamp",
      price: "$324.77",
      income: "$21.10k",
      sales: "8,245",
      view: "33,415",
      click: "25,430",
      clickPercent: "91.43%",
      status: "Unactive",
      statusIcon: "lucideCircleX",
      statusColor: "danger"
    },
    {
      name: "PowerPulse Wireless Earbuds",
      price: "$99.00",
      income: "$374",
      sales: "2,987",
      view: "41,123",
      click: "46,963",
      clickPercent: "79.21%",
      status: "Active",
      statusIcon: "lucideCircleCheck",
      statusColor: "success"
    },
    {
      name: "AdventureQuest Outdoor Backpack",
      price: "$107.00",
      income: "$8.22",
      sales: "2,541",
      view: "14,789",
      click: "12,584",
      clickPercent: "39.04%",
      status: "Unactive",
      statusIcon: "lucideCircleX",
      statusColor: "danger"
    },
    {
      name: "FitLifePro Fitness Tracker",
      price: "$111.99",
      income: "$42.2k",
      sales: "44,201",
      view: "40,888",
      click: "14,520",
      clickPercent: "68.41%",
      status: "Active",
      statusIcon: "lucideCircleCheck",
      statusColor: "success"
    },
    {
      name: "ChefMaster Pro Cookware Set",
      price: "$107.00",
      income: "$8.22",
      sales: "2,541",
      view: "14,789",
      click: "12,584",
      clickPercent: "39.04%",
      status: "Unactive",
      statusIcon: "lucideCircleX",
      statusColor: "danger"
    },
    {
      name: "PetPalace Pet Accessories",
      price: "$1,542.99",
      income: "$12.36k",
      sales: "3,217",
      view: "21,451",
      click: "16,287",
      clickPercent: "39.56%",
      status: "Active",
      statusIcon: "lucideCircleCheck",
      statusColor: "success"
    },
    {
      name: "TravelSavvy Luggage Collection",
      price: "$1,542.99",
      income: "$12.36k",
      sales: "3,217",
      view: "21,451",
      click: "16,287",
      clickPercent: "39.56%",
      status: "Active",
      statusIcon: "lucideCircleCheck",
      statusColor: "success"
    },
    {
      name: "MusicMuse Premium Headphones",
      price: "$99.00",
      income: "$374",
      sales: "2,987",
      view: "41,123",
      click: "46,963",
      clickPercent: "79.21%",
      status: "Active",
      statusIcon: "lucideCircleCheck",
      statusColor: "success"
    },
    {
      name: "WellnessWonders Yoga Mat",
      price: "$324.77",
      income: "$21.10k",
      sales: "8,245",
      view: "33,415",
      click: "25,430",
      clickPercent: "91.43%",
      status: "Unactive",
      statusIcon: "lucideCircleX",
      statusColor: "danger"
    }
  ];
}
