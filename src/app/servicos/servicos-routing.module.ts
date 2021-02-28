import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component';
import { ServicosComponent } from './servicos.component';

const routes: Routes = [
  {
    path: '',
    component: ServicosComponent,
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
export class ServicosRoutingModule { }
