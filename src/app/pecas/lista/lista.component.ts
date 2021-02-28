import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { CarregandoObservable } from '../../shared/spinner/carregando.observable';
import { ModalAlertaService } from '../../shared/modal-alerta/modal-alerta.service';
import { Pecas } from '../pecas.interface';
import { PecasService } from '../pecas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  dataSource = new MatTableDataSource<Pecas>([])
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'fabricante', 'acoes'];

  constructor(
    private pecasService: PecasService,
    private router: Router,
    private modalAlertaService: ModalAlertaService,
    private carregando$: CarregandoObservable
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngOnInit() {
    this.listarPecas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  listarPecas(): void {

    this.pecasService.listar()
      .pipe(take(1))
      .subscribe((pecas: Pecas[]) => {
        this.dataSource.data = pecas;
      },
        (error) => {
          this.carregando$.encerrarCarregando();
          this.modalAlertaService.exibirAlerta(error);
        }
      );
  }

  editar(id: string): void {
    this.router.navigate(['pecas/cadastro', id]);
  }

  excluir(id: string): void {
    this.pecasService.deletar(+id)
      .pipe(take(1))
      .subscribe((response: any) => {
        this.listarPecas();
        // incluir modal para exibir a msg
        alert(response.mensagem);
      },
        (error) => {
          this.carregando$.encerrarCarregando();
          this.modalAlertaService.exibirAlerta(error);
        }
      );
  }
}
