import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  titulo_card = 'Home';

  constructor(
    private router: Router
  ) { }

  navegar(rota: string): void {
    this.router.navigate([`${rota}`]);
  }

}
