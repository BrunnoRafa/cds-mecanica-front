import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PecasComponent } from './pecas.component';

const routes: Routes = [
  {
    path: '',
    component: PecasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PecasRoutingModule { }
