import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  goToFirst(): void {
    document.querySelector("#sobre-nosotros")?.scrollIntoView();
  }

  goToSecond(): void {
    document.querySelector("#excursiones")?.scrollIntoView();
  }

  goToThird(): void {
    document.querySelector("#contacto")?.scrollIntoView();
  }


}
