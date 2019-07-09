import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { TinyEditorModule } from 'src/app/tiny-editor/tiny-editor.module';

@NgModule({
  declarations: [CustomerListComponent, CustomerDetailComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    TinyEditorModule,
  ],
  providers: [
  ]
})
export class CustomersModule { }
