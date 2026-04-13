import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Feature } from "./components/feature/feature";
import { Services } from "./components/services/services";
import { About } from "./components/about/about";
import { Pricing } from "./components/pricing/pricing";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-onepage',
  imports: [Header, Hero, Feature, Services, About, Pricing, Contact, Footer],
  templateUrl: './onepage.html',
  styles: ``
})
export class Onepage {

}
