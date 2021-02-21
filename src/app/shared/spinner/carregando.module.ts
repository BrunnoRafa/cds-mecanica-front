import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { CarregandoObservable } from './carregando.observable';
import { SpinnerComponent } from './spinner.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,

    SharedModule
  ],
  declarations: [
    SpinnerComponent
  ],
  exports: [
    SpinnerComponent
  ],
  providers: [
    CarregandoObservable
  ]
})
export class CarregandoModule { }
