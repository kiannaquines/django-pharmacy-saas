import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ProductSize = {
  id: number;
  label: string;
  active: boolean;
}

type ColorOption = {
  id: number;
  colorName: string;
  colorClass: string;
  selected: boolean;
}

@Component({
  selector: 'app-product-preview',
  imports: [FormsModule],
  templateUrl: './product-preview.html',
  styles: ``
})

export class ProductPreview {

  productSizes: ProductSize[] = [
  { id: 1, label: 'XS', active: false },
  { id: 2, label: 'S', active: true },
  { id: 3, label: 'M', active: false },
  { id: 4, label: 'L', active: false },
  { id: 5, label: 'XL', active: false },
  { id: 6, label: '2XL', active: false }
];

colorOptions: ColorOption[] = [
  { id: 1, colorName: 'Primary', colorClass: 'text-primary', selected: false },
  { id: 2, colorName: 'Danger', colorClass: 'text-danger', selected: false },
  { id: 3, colorName: 'Success', colorClass: 'text-success', selected: false },
  { id: 4, colorName: 'Secondary', colorClass: 'text-secondary', selected: false }
];

}
