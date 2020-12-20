import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from './modal/modal.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,

    ModalComponent
  ]
})
export class SharedModule { }
