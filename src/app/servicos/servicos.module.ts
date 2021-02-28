import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosComponent } from './servicos.component';
import { ServicosRoutingModule } from './servicos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    ServicosComponent,
    FormComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    SharedModule
  ]
})
export class ServicosModule { }
