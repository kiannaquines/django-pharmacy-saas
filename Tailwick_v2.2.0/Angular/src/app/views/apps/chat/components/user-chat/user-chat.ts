import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SimplebarAngularModule } from "simplebar-angular";

@Component({
  selector: 'app-user-chat',
  imports: [RouterLink, SimplebarAngularModule],
  templateUrl: './user-chat.html',
  styles: ``
})
export class UserChat {

}
