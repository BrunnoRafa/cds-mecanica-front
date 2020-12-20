import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs/operators';

import { PecasService } from './pecas.service';

@Component({
  selector: 'app-pecas',
  templateUrl: './pecas.component.html',
  styleUrls: ['./pecas.component.scss']
})
export class PecasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];
  dataSource = new MatTableDataSource<PeriodicElement>([])

  constructor(private pecasService: PecasService) { }

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
      .subscribe((pecas: any) => {
        this.dataSource.data = pecas
      },
        (error: any) => {
          console.log(error)
        });
  }

  editar(): void {
    alert('clicou e')
  }

  excluir(): void {
    alert('clicou ex')
  }
}

export interface PeriodicElement {
  nome: string;
  id: number;
  descricao: number;
  acoes: string;
}
