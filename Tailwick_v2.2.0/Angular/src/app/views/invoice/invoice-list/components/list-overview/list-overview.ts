import { Component } from '@angular/core';

type ProductRow = {
  id: number;
  title: string;
  description: string;
  price: string;
  quantity: number;
  total: string;
}

@Component({
  selector: 'app-list-overview',
  imports: [],
  templateUrl: './list-overview.html',
  styles: ``
})
export class ListOverview {
    productTableData: ProductRow[] = [
    {
      id: 1,
      title: "Webadmin - Premium Admin & Dashboard",
      description: "Build with Bootstrap, React JS, Angular, Vue etc.",
      price: "$24.00",
      quantity: 2,
      total: "$48"
    },
    {
      id: 2,
      title: "Webadmin - Admin & Dashboard",
      description: "Build with Bootstrap, React JS, Angular, Vue etc.",
      price: "$25.00",
      quantity: 4,
      total: "$100"
    },
    {
      id: 3,
      title: "Tocly - Admin & Dashboard",
      description: "Build with Bootstrap, React JS, Angular, Vue etc.",
      price: "$16.00",
      quantity: 9,
      total: "$144"
    }
  ];
}
