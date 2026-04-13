import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import { SimplebarAngularModule } from "simplebar-angular";

@Component({
  selector: 'app-email-overview',
  imports: [NgIcon, RouterLink, SimplebarAngularModule],
  templateUrl: './email-overview.html',
  styles: ``
})
export class EmailOverview {

}
