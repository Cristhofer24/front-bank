import { Component } from '@angular/core';
import NavbarClientComponent from "../../Pages/datos-cliente/navbar-client/navbar-client.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client-layout',
  imports: [NavbarClientComponent,RouterOutlet],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.css'
})
export class ClientLayoutComponent {

}
