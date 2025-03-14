import { Component } from '@angular/core';
import NavbargComponent from "../../Pages/navbarg/navbarg.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-general-layout',
  imports: [NavbargComponent,RouterOutlet],
  templateUrl: './general-layout.component.html',
  styleUrl: './general-layout.component.css'
})
export class GeneralLayoutComponent {

}
