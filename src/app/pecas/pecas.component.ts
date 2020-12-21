import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pecas',
  templateUrl: './pecas.component.html',
  styleUrls: ['./pecas.component.scss']
})
export class PecasComponent {
  titulo_card = 'Peças';

  constructor(private router: Router) { }

  navegar(rota: string): void {
    this.titulo_card = rota === 'cadastro' ? 'Peças / Cadastro' : 'Peças';
    this.router.navigate([`/pecas/${rota}`]);
  }
}
