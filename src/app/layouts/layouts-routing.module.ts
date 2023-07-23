import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: 'login',
        loadChildren: () => import("../auth/auth.module").then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
