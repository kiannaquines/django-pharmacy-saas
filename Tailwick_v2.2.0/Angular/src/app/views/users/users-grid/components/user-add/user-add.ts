import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';
import { SimplebarAngularModule } from "simplebar-angular";

@Component({
  selector: 'app-user-add',
  imports: [NgIcon, SimplebarAngularModule, FlatpickrDirective ],
  templateUrl: './user-add.html',
  providers: [provideFlatpickrDefaults()],
  styles: ``
})
export class UserAdd {

}
