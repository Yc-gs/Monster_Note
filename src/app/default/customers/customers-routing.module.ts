import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustumerDetailResolverService } from './customer-detail/custumer-detail-resolver.service';
import { CustomerListResolverService } from './customer-list/customer-list-resolver.service';

const routes: Routes = [
  {
    path: 'customer-list',
    component: CustomerListComponent,
    data: { animation: 'heroes' },
    // resolve: {
    //   customerList: CustomerListResolverService
    // }
  },
  {
    path: 'customer-detail/:id',
    component: CustomerDetailComponent,
    data: { animation: 'hero' },
    resolve: {
      customerDetail: CustumerDetailResolverService
    }
  },
  { 
    path: '',
    redirectTo: 'customer-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'customer-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
