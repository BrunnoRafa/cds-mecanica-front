import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PecasComponent } from './pecas.component';
import { PecasRoutingModule } from './pecas-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [PecasComponent],
  imports: [
    CommonModule,
    PecasRoutingModule,
    SharedModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ]
})
export class PecasModule { }
