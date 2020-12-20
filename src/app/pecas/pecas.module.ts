import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PecasComponent } from './pecas.component';
import { PecasRoutingModule } from './pecas-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component'

@NgModule({
  declarations: [
    PecasComponent,
    FormComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    PecasRoutingModule,
    SharedModule
  ]
})
export class PecasModule { }
