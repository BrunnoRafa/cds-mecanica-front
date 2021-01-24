import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PecasComponent } from './pecas.component';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {
    path: '',
    component: PecasComponent,
    children: [
      {
        path: 'lista',
        component: ListaComponent
      },
      {
        path: 'cadastro',
        component: FormComponent
      },
      {
        path: 'cadastro/:id',
        component: FormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PecasRoutingModule { }
