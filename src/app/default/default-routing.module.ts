import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: 'default',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'customers',
        loadChildren: './customers/customers.module#CustomersModule'
      },
      {
        path: 'note',
        loadChildren: './note/note.module#NoteModule'
      },
      {
        path: 'orders',
        loadChildren: './orders/orders.module#OrdersModule',
      },
      {
        path: '',
        redirectTo: 'note',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'default',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
