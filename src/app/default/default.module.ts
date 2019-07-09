import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    SharedModule,
  ]
})
export class DefaultModule { }
