import { Component } from '@angular/core';
import { ProductPreview } from "./components/product-preview/product-preview";
import { FormsModule } from '@angular/forms';
import { PageTitle } from "../../../components/page-title/page-title";
import { FileUploader } from "../../../components/file-uploader/file-uploader";
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';

type CheckboxColor = {
  id: number;
  colorClass: string;
  checked: boolean;
}

type ProductSize = {
  id: number;
  label: string;
  active: boolean;
}

@Component({
  selector: 'app-product-create',
  imports: [ProductPreview, FormsModule, PageTitle, FileUploader, FlatpickrDirective],
  templateUrl: './product-create.html',
  providers: [provideFlatpickrDefaults()],
  styles: ``
})
export class ProductCreate {
   
  checkboxColors: CheckboxColor[] = [
  { id: 1, colorClass: 'text-primary', checked: false },
  { id: 2, colorClass: 'text-success', checked: false },
  { id: 3, colorClass: 'text-info', checked: false },
  { id: 4, colorClass: 'text-warning', checked: false },
  { id: 5, colorClass: 'text-danger', checked: false },
  { id: 6, colorClass: 'text-black', checked: false },
  { id: 7, colorClass: 'text-default-500', checked: false }
];

productSizes: ProductSize[] = [
  { id: 1, label: 'XS', active: false },
  { id: 2, label: 'S', active: true },
  { id: 3, label: 'M', active: false },
  { id: 4, label: 'L', active: false },
  { id: 5, label: 'XL', active: false },
  { id: 6, label: '2XL', active: false }
];

}
