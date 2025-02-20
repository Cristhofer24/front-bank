import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export default class IndexComponent {

}
