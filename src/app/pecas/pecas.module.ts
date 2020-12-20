import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PecasComponent } from './pecas.component';
import { PecasRoutingModule } from './pecas-routing.module';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [PecasComponent],
  imports: [
    CommonModule,
    PecasRoutingModule,
    SharedModule
  ]
})
export class PecasModule { }
