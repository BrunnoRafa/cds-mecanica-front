import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent {
  titulo_card = 'Serviços';

  constructor(private router: Router) { }

  navegar(rota: string): void {
    this.router.navigate([`/servicos/${rota}`]);
  }

  irHome(): void {
    this.router.navigate(['/home']);
  }
}
