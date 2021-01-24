import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'pecas', // redirect temporario
    pathMatch: 'full',
  },
  {
    path: 'pecas',
    loadChildren: () => import('./pecas/pecas.module').then(m => m.PecasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
