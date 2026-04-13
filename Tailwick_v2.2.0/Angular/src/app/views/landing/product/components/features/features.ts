import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";

@Component({
  selector: 'app-features',
  imports: [RouterLink, NgIcon],
  templateUrl: './features.html',
  styles: ``
})
export class Features {
   
  featuresData: string[] = [
  "Matches Your Foot Shape & Type",
  "Easy to Wear",
  "Heels That You Can Wear",
  "Good Quality & Condition",
  "Segments of Solid Rubber"
];


}
