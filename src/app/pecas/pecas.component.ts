import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pecas',
  templateUrl: './pecas.component.html',
  styleUrls: ['./pecas.component.scss']
})
export class PecasComponent {

  constructor(private router: Router) { }

  navegar(rota: string): void {
    this.router.navigate([`/pecas/${rota}`]);
  }
}
