import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs/operators';

import { PecasService } from './pecas.service';
import { Pecas } from './pecas.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pecas',
  templateUrl: './pecas.component.html',
  styleUrls: ['./pecas.component.scss']
})
export class PecasComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<Pecas>([])
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];

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
      .subscribe((pecas: Pecas[]) => {
        this.dataSource.data = pecas
      },
        (error: any) => {
          console.log(error)
        });
  }

  editar(id: string): void {
    alert('a');
  }

  excluir(): void {
    alert('clicou ex')
  }
}
