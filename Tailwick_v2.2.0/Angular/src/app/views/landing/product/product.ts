import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { About } from "./components/about/about";
import { Feedback } from "./components/feedback/feedback";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/footer/footer";
import { Product1 } from "./components/product1/product1";

@Component({
  selector: 'app-product',
  imports: [Header, Hero, Product1, Features, About, Feedback, Cta, Footer],
  templateUrl: './product.html',
  styles: ``
})
export class Product {

}
