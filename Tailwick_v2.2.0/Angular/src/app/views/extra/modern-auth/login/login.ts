import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";

@Component({
  selector: 'app-login',
  imports: [RouterLink, NgIcon],
  templateUrl: './login.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  
})
export class Login {

}
